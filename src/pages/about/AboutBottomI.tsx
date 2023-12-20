import { Box, Typography } from "@mui/material";

const AboutBottomI = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography>Call Us: +35-155-455-9555</Typography>
        <Typography>Email Us: customers@byteCafe.net</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography>Location: Silicon Street, California</Typography>
        <Typography>Website: byteCafe.com</Typography>
      </Box>{" "}
    </Box>
  );
};

export default AboutBottomI;
