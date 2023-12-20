import {
  Box,
  Button,
  TableCell,
  TableContainer,
  TableHead,
  Typography,
} from "@mui/material";
import {
  StyledTableCell,
  StyledTable,
  StyledImage,
  StyledBox,
  StyledBtn,
} from "../../styles/StyledTable";
import { Paper } from "@mui/material";

interface CatalogTablesProp {
  isDrinkTable: boolean;
  items: Item[];
  columns: number;
}

interface Item {
  index: number;
  image: string;
  name: string;
  price: number;
  isDrink: boolean;
}

const CatalogTable = ({ isDrinkTable, items, columns }: CatalogTablesProp) => {
  const tableCell = items
    .filter((item) => item.isDrink === isDrinkTable)
    .map((item) => (
      <Paper elevation={2} sx={{ padding: "1rem" }}>
        <StyledBox>
          <StyledImage src={item.image} alt={item.image} />
          <Typography>{item.name}</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <StyledBtn size="small">Clear</StyledBtn>
            <StyledBtn size="small">-</StyledBtn>
            <StyledBtn size="small">+</StyledBtn>
          </Box>
        </StyledBox>
      </Paper>
    ));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" component="h2">
        {isDrinkTable ? "Drinks" : "Food"}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {tableCell}
      </Box>
    </Box>
  );
};

export default CatalogTable;
