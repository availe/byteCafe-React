import { Box, Typography } from "@mui/material";
import CatalogTable from "./CatalogTable";

const Products = () => {
  return (
    <Box>
      <Typography variant="h1" component="h1">
        Our Catalog
      </Typography>
      <CatalogTable isDrinkTable />
    </Box>
  );
};

export default Products;
