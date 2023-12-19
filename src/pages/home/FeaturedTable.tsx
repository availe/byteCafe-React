import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
} from "@mui/material";
import Items from "../../data/items.json";
import {
  StyledTableCell,
  StyledImage,
  StyledTable,
} from "../../styles/StyledTable";

const FeaturedTable = () => {
  return (
    <TableContainer>
      <StyledTable aria-label="Featured products table">
        <TableBody>
          <TableRow>
            <StyledTableCell>
              <StyledImage src={Items[0].image} alt={Items[0].image} />
            </StyledTableCell>
            <StyledTableCell>
              <StyledImage src={Items[1].image} alt={Items[1].image} />
            </StyledTableCell>
            <StyledTableCell>
              <StyledImage src={Items[2].image} alt={Items[2].image} />
            </StyledTableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ textAlign: "center" }}>
              <p>{Items[0].name}</p>
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              <p>{Items[1].name}</p>
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              <p>{Items[1].name}</p>
            </TableCell>
          </TableRow>
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default FeaturedTable;
