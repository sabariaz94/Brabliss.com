"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button as MUIButton,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiUploadCloud } from "react-icons/fi";
import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
import { v4 as uuidv4 } from "uuid";
import { urlFor } from "../../../../sanity/lib/imageUrlBuilder"


const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    sizes: [],
    images: [],
  });
  const [imageFiles, setImageFiles] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filterText, setFilterText] = useState("");
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    client
      .fetch(`*[_type == "product"] | order(_createdAt desc)`)
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "sizes") {
      const selectedOptions = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setProductData((prev) => ({ ...prev, sizes: selectedOptions }));
    } else {
      setProductData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      setImageFiles(Array.from(e.target.files));
    }
  };

  const handleOpen = (product = null) => {
    setEditingProduct(product);
    setProductData(
      product || {
        title: "",
        price: "",
        category: "",
        description: "",
        sizes: [],
        images: [],
      }
    );
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setImageFiles([]);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      let uploadedImages = [];

      for (const file of imageFiles) {
        const asset = await client.assets.upload("image", file, {
          filename: file.name,
        });

        uploadedImages.push({
          _key: uuidv4(), // ✅ required
          _type: "image",
          asset: {
            _type: "reference",
            _ref: asset._id,
          },
        });
      }

      const doc = {
        _type: "product",
        ...productData,
        images: uploadedImages.length ? uploadedImages : productData.images,
      };

      if (editingProduct?._id) {
        await client.patch(editingProduct._id).set(doc).commit();
        toast.success("Product updated!");
      } else {
        await client.create(doc);
        toast.success("Product added!");
      }

      const refreshed = await client.fetch(
        `*[_type == "product"] | order(_createdAt desc)`
      );
      setProducts(refreshed);
      handleClose();
    } catch (err) {
      console.error(err);
      toast.error("Error saving product");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await client.delete(id);
      toast.success("Product deleted!");
      setProducts(products.filter((p) => p._id !== id));
    } catch {
      toast.error("Failed to delete");
    }
  };

  const filteredProducts = products.filter(
    (p) =>
      p.title?.toLowerCase().includes(filterText.toLowerCase()) ||
      p.category?.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <ToastContainer />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-4xl font-bold text-blue-800">Manage Products</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search by name or category..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className="bg-blue-700 text-white px-5 py-2 rounded-md hover:bg-blue-800"
            onClick={() => handleOpen()}
          >
            + Add Product
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow-lg p-5 border border-blue-200 hover:shadow-2xl"
          >
            <h2 className="text-xl font-semibold text-blue-700">
              {product.title}
            </h2>
            <p className="text-sm text-gray-600">
              Category: {product.category}
            </p>
            <p className="text-blue-600 font-bold">Price: $ {product.price}</p>
            <p className="text-sm text-gray-600">
              Sizes: {product.sizes?.join(", ")}
            </p>
            <p className="text-sm text-gray-500 my-2">{product.description}</p>
            <div className="flex gap-2 overflow-x-auto">
              {product.images?.map((img, idx) => (
                <div
                  key={idx}
                  className="w-20 h-20 relative rounded-lg border border-blue-300 overflow-hidden"
                >
                  <Image
                    src={urlFor(img).width(200).url()}
                    alt="Product"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleOpen(product)}
                className="px-4 py-1 bg-yellow-500 text-white rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="px-4 py-1 bg-red-600 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onClose={handleClose} fullScreen={isMobile}>
        <DialogTitle>
          {editingProduct ? "Edit Product" : "Add Product"}
        </DialogTitle>
        <DialogContent>
          <div className="space-y-4 mt-2">
            <input
              type="text"
              name="title"
              placeholder="Product Title"
              value={productData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-300 rounded"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={productData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-300 rounded"
            />
            <select
              name="sizes"
              multiple
              value={productData.sizes}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-300 rounded"
            >
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={productData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-300 rounded"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={productData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-300 rounded"
            />
            <div className="flex items-center gap-2">
              <FiUploadCloud className="text-blue-500 h-10 w-12" />
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <MUIButton onClick={handleClose} color="secondary">
            Cancel
          </MUIButton>
          <MUIButton
            onClick={handleSave}
            variant="contained"
            color="primary"
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : "Save"}
          </MUIButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddProduct;
