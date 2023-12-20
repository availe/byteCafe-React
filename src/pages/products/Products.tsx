import { Box, Typography } from "@mui/material";
import CatalogTable from "./CatalogTable";
import Items from "../../data/items.json";

const Products = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "Center",
        gap: "1.5rem",
      }}
    >
      <Typography variant="h1" component="h1">
        Our Catalog
      </Typography>
      <CatalogTable columns={3} isDrinkTable={true} items={Items} />
      <CatalogTable columns={3} isDrinkTable={false} items={Items} />
    </Box>
  );
};

export default Products;
