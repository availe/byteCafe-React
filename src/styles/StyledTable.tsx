import { Box, Button, styled, Table, TableCell } from "@mui/material";

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

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "20vw",
  height: "25vw",
  justifyContent: "space-evenly",
  textAlign: "center",
  gap: ".5rem",
});

const StyledBtn = styled(Button)({
  display: "flex",
  justifyContent: "space-evenly",
  textAlign: "center",
  background: "#3874CB",
  color: "white",
  "&:hover": {
    background: "#3874CB",
    boxShadow: "0px 2px #b0c4de",
  },
});

export { StyledTableCell, StyledImage, StyledTable, StyledBox, StyledBtn };
