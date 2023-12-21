import { Box, Tab, Tabs } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer">
      <Tabs
        textColor="inherit"
        indicatorColor="secondary"
        variant="fullWidth"
        style={{ flexGrow: 1 }}
      >
        <Tab label="©2023 Byte Cafe" />
        <Tab label="Privacy Policy" />
        <Tab label="Terms and Conditions" />
      </Tabs>
    </Box>
  );
};

export default Footer;
