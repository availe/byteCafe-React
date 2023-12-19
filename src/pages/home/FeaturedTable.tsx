import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import Items from "../../data/items.json";

const FeaturedTable = () => {
  return (
    <TableContainer>
      <Table aria-label="Featured products table">
        <TableHead>
          <TableRow>
            <TableCell>
              <img src={Items[0].image} alt={Items[0].image} />
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default FeaturedTable;
