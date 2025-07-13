"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Link from "next/link";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import CartIcon from "./CartIcon";
import { getAuth, signOut } from "firebase/auth";
import { useCart } from "@/context/CartContext";

// const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const { cartItems } = useCart();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        console.log("signout hogya");
      })
      .catch((error) => {
        // An error happened.
        console.log("error hogya", error);
      });
  };

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "white", color: "#db2777", width: "100%" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon  sx={{  display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-pink-600 hover:opacity-90"
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              
              <Image
              src="/assets/imgs/logo1.png" // Path to your image
              alt="Description of your image"
              width={100}
              height={100}
            />
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {/* {pages.map((page) => ( */}
              <MenuItem onClick={handleCloseNavMenu}>
                <ul className="flex flex-col justify-center gap-2 items-center text-xl ">
                  <li>
                    <Link
                      prefetch={true}
                      className="hover:border-b-2 border-[#9d174d]"
                      href="/home"
                    >
                      {" "}
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      prefetch={true}
                      className="hover:border-b-2 border-[#9d174d]"
                      href="/products"
                    >
                      {" "}
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:border-b-2 border-[#9d174d]"
                      href="/about"
                      prefetch={true}
                    >
                      {" "}
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      prefetch={true}
                      className="hover:border-b-2 border-[#9d174d]"
                      href="/contact"
                    >
                      {" "}
                      Contact Us
                    </Link>
                  </li>
                </ul>

                {/* <Typography sx={{ textAlign: "center" }}>{page}</Typography> */}
              </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
           <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-pink-600 hover:opacity-90"
          >
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
           
            <Image
              src="/assets/imgs/logo1.png" // Path to your image
              alt="Description of your image"
              width={100}
              height={100}
            />
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <div
              className="flex justify-center items-center pt-2 text-[18 px] gap-2"
              sx={{ my: 2, color: "black", display: "block" }}
            >
              {/* Web View  */}
              <ul className="flex justify-center gap-4 items-center text-xl ">
                <li>
                  <Link
                    className="hover:border-b-2 border-[#9d174d]"
                    href="/home"
                    prefetch={true}
                  >
                    {" "}
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={true}
                    className="hover:border-b-2 border-[#9d174d]"
                    href="/products"
                  >
                    {" "}
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={true}
                    className="hover:border-b-2 border-[#9d174d]"
                    href="/about"
                  >
                    {" "}
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={true}
                    className="hover:border-b-2 border-[#9d174d]"
                    href="/contact"
                  >
                    {" "}
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            {/* {pages.map((page) => (
             
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>
          <div
            className="header-icons"
            style={{ display: "flex", alignItems: "center", gap: "0px" }}
          >
            {/* <Link href="/wishlist" prefetch={true} passHref>
              <IconButton
                aria-label="Wishlist"
                style={{
                  fontSize: "24px",
                  color: "#9d174d",
                  transition: "transform 0.3s ease",
                }}
                className="icon-button"
              >
                <FavoriteIcon style={{ fontSize: "32px" }} />
              </IconButton>
            </Link> */}

            {/* <Link href="/cart" prefetch={true} passHref>
              <IconButton
                aria-label="Cart"
                style={{
                  fontSize: "24px",
                  color: "#9d174d",
                  transition: "transform 0.3s ease",
                }}
                className="icon-button"
              >
                <AddShoppingCartIcon style={{ fontSize: "32px" }} />
              </IconButton>
            </Link> */}

            <Link href="/cart" prefetch={true} passHref>
              <IconButton
                aria-label="Cart"
                style={{
                  fontSize: "24px",
                  color: "#9d174d",
                  transition: "transform 0.3s ease",
                  position: "relative",
                }}
                className="icon-button"
              >
                <AddShoppingCartIcon style={{ fontSize: "32px" }} />

                {/* Counter badge */}
                {cartItems.length > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      backgroundColor: "#db2777",
                      color: "#fff",
                      borderRadius: "50%",
                      padding: "2px 6px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {cartItems.length}
                  </span>
                )}
              </IconButton>
            </Link>

            <Link href="/login" prefetch={true} passHref>
              <IconButton
                aria-label="Account"
                style={{
                  fontSize: "24px",
                  color: "#9d174d",
                  transition: "transform 0.3s ease",
                }}
                className="icon-button"
              >
                <AccountCircleIcon style={{ fontSize: "32px" }} />
              </IconButton>
            </Link>

            <style jsx>{`
              .icon-button:hover {
                transform: scale(1.2);
              }

              .header-icons {
                display: flex;
                align-items: center;
                gap: 16px;
              }
            `}</style>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
