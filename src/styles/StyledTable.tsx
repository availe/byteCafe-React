import {
  styled,
  TableContainer,
  TableCell,
  Table,
  Box,
  Button,
} from "@mui/material";
import { BurstMode } from "@mui/icons-material";

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
});

export { StyledTableCell, StyledImage, StyledTable, StyledBox, StyledBtn };
