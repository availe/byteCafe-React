import { Box, Typography } from "@mui/material";
const AboutTop = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography variant="h2" component="h2" sx={{ textAlign: "center" }}>
        Proud locally-owned business since 1891
      </Typography>
      <Typography
        sx={{ textAlign: "justify", paddingLeft: "3vw", paddingRight: "3vw" }}
      >
        Ever since our founder Casey David created byteCafe in 1891, our mission
        has been to provide high quality organic coffee. Sourced straight from
        locally-owned sustainable farms across South America, our famous coffees
        provide a taste unmatched across the Northeast. We continuously seek to
        improve our selection of foods and drinks while keeping true to our
        quality standards.
      </Typography>
    </Box>
  );
};

export default AboutTop;
