import {
  Box,
  Typography,
  Button,
  Table,
  TableContainer,
  Paper,
  Link,
} from "@mui/material";

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
      <TableContainer component={Paper}>
        <table aria-label="featured products table"></table>
      </TableContainer>
    </Box>
  );
};

export default Home;
