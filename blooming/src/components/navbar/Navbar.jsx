import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import blooming from "../../assets/blooming logo-01 (2) 2.png"
// import cart from "../../assets/shopping-card.png"
import cart from "../../assets/trolley.png"
import CartPopup from "../cart/cart";
function Navbar() {

  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  // Function to toggle the popup
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };


  return (
    <AppBar position="static" sx={{ bgcolor: "#FFFAEC" }}>
      <Toolbar>
      <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src={blooming}
            alt="Blooming Logo"
            style={{ maxHeight: "100px", maxWidth: "100%", height: "auto" }}
          />
        </Link>
        <Box sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}>
          <Button component={Link} to="/about" sx={{ mx: 1, color: "#F13A44" }}>
            About
          </Button>
          <Button component={Link} to="/Categories" sx={{ mx: 1, color: "#F13A44" }}>
            Categories
          </Button>
          {/* <Button component={Link} to="/contact" sx={{ mx: 1, color: "#F13A44" }}>
            Contact Us
          </Button> */}
          <img
            src={cart}
            onClick={togglePopup}
            style={{ maxHeight: "80px", maxWidth: "100%", height: "auto", cursor: 'pointer' }}
          />
        </Box>

        {isPopupOpen && <CartPopup onClose={togglePopup} />}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;


