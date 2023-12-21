import { Box, Typography } from "@mui/material";

const AboutBottomI = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "25vw",
        paddingTop: "1.5rem",
        borderTop: "red 1px solid",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <Typography>Call Us: +35-155-455-9555</Typography>
        <Typography>Email Us: customers@byteCafe.net</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <Typography>Location: Silicon Street, California</Typography>
        <Typography>Website: byteCafe.com</Typography>
      </Box>{" "}
    </Box>
  );
};

export default AboutBottomI;
