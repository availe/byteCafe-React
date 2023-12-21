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
        marginTop: "1.5rem",
      }}
    >
      <Typography variant="h2" component="h2">
        Our Catalog
      </Typography>
      <CatalogTable isDrinkTable={true} items={Items} />
      <CatalogTable isDrinkTable={false} items={Items} />
    </Box>
  );
};

export default Products;
