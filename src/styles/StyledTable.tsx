import { styled, TableContainer, TableCell, Table } from "@mui/material";

const StyledTable = styled(Table)({
  display: "flex",
  justifyContent: "space-evenly",
});

const StyledTableCell = styled(TableCell)({
  width: "20vw",
  height: "20vw",
});

const StyledImage = styled("img")({
  objectFit: "cover",
  width: "20vw",
  height: "20vw",
});

export { StyledTableCell, StyledImage, StyledTable };
