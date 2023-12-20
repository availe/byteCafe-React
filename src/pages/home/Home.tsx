import { Box, Typography, Button, Link } from "@mui/material";
import FeaturedTable from "./FeaturedTable";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        textAlign: "center",
        gap: "1.5rem",
      }}
    >
      <Typography variant="h1" component="h1">
        The best cafe in town
      </Typography>
      <Typography variant="body1">
        Our products are derived from the finest coffee beans from South
        America.
      </Typography>
      <Button
        variant="contained"
        component={Link}
        href="/products"
        sx={{ width: "25vw", height: "15vh", alignSelf: "center" }}
      >
        Exclusive holiday sale - Get 25% off on all drink-plus-meal combos
      </Button>
      <Typography variant="h2" component="h2">
        Our featured products
      </Typography>
      <FeaturedTable />
    </Box>
  );
};

export default Home;
