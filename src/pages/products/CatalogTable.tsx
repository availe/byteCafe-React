import { TableContainer, TableHead } from "@mui/material";
import {
  StyledTableCell,
  StyledTable,
  StyledImage,
} from "../../styles/StyledTable";

interface CatalogTablesProp {
  isDrinkTable: boolean;
}

const CatalogTable = ({ isDrinkTable }: CatalogTablesProp) => {
  return (
    <TableContainer>
      <StyledTable>
        <TableHead> {isDrinkTable ? "Drinks" : "Food"} </TableHead>
      </StyledTable>
    </TableContainer>
  );
};

export default CatalogTable;
