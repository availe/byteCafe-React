import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    // switch to new page upon click
    switch (newValue) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/products");
        break;
      case 2:
        navigate("/about");
        break;
      case 3:
        navigate("/cart");
        break;
      default:
        break;
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Tabs
          textColor="inherit"
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          variant="fullWidth"
          style={{ flexGrow: 1 }}
        >
          <Tab label="Home" />
          <Tab label="Products" />
          <Tab label="About" />
          <Tab label="Cart" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
