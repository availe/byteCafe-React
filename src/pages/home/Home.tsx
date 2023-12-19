import { Box, Typography, Button, Link } from "@mui/material";
import FeaturedTable from "./FeaturedTable";

const Home = () => {
  return (
    <Box>
      <Typography variant="h1" component="h1">
        The best cafe in town
      </Typography>
      <Typography variant="body1">
        Our products are derived from the finest coffee beans from South
        America.
      </Typography>
      <Button variant="contained" component={Link} href="/products">
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
