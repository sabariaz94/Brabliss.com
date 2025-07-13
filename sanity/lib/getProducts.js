import { client } from "./client"

export const getProducts = async () => {
  const query = `*[_type == "product"]{
    _id,
    title,
    price,
    category,
    description,
    sizes,
    images[]{
      asset->{url}
    }
  }`

  const products = await client.fetch(query)
  return products
}
