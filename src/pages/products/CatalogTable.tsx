import { Box, Paper, Typography } from "@mui/material";
import { StyledBox, StyledBtn, StyledImage } from "../../styles/StyledTable";
import useItemCounts from "../../hooks/itemCount";

interface CatalogTablesProp {
  isDrinkTable: boolean;
  items: Item[];
}

interface Item {
  index: number;
  image: string;
  name: string;
  price: number;
  isDrink: boolean;
}
const CatalogTable = ({ isDrinkTable, items }: CatalogTablesProp) => {
  const { itemCount, incrementCount, decrementCount, clearCount } =
    useItemCounts();

  const tableCell = items
    .filter((item) => item.isDrink === isDrinkTable)
    .map((item) => (
      <Paper elevation={2} sx={{ padding: "1rem" }}>
        <StyledBox>
          <StyledImage src={item.image} alt={item.image} />
          <Typography>{item.name}</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <StyledBtn size="small" onClick={() => clearCount(item.index)}>
              Clear
            </StyledBtn>
            <StyledBtn size="small" onClick={() => decrementCount(item.index)}>
              -
            </StyledBtn>
            <StyledBtn size="small" onClick={() => incrementCount(item.index)}>
              +
            </StyledBtn>
            <StyledBtn size="small">
              {itemCount[item.index] ? itemCount[item.index] : 0}
            </StyledBtn>
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
      <Typography variant="h3" component="h2">
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
