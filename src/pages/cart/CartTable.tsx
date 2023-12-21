import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import Items from "../../data/items.json";
import useItemCounts from "../../hooks/itemCount";

const CartTable = () => {
  const { itemCount } = useItemCounts();
  let recordTotal = 0;

  const tableRow = Items.map((item) => {
    const quantity = itemCount[item.index] ? itemCount[item.index] : 0;
    if (quantity <= 0) return null; // if item has no quantity don't print row in cart
    const total = item.price * quantity;
    recordTotal += total;

    return (
      <TableRow>
        <TableCell>{item.price}</TableCell>
        <TableCell>{item.name}</TableCell>
        <TableCell>{quantity}</TableCell>
        <TableCell>{total.toFixed(2)}</TableCell>
      </TableRow>
    );
  });

  return (
    <Fragment>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Price</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tableRow}</TableBody>
        </Table>
      </TableContainer>

      <Paper
        elevation={1}
        sx={{ padding: "1rem", width: "20vw", alignSelf: "center" }}
      >
        <Typography>Total: ${recordTotal.toFixed(2)}</Typography>
        <Typography>Tax: ${(recordTotal * 0.0815).toFixed(2)}</Typography>
        <Typography>Discount: ${(recordTotal * 0.25).toFixed(2)}</Typography>
        <Button type="submit" sx={{ width: "8vw", alignSelf: "center" }}>
          Order: $
          {(recordTotal + recordTotal * 0.0815 - recordTotal * 0.25).toFixed(2)}
        </Button>
      </Paper>
    </Fragment>
  );
};

export default CartTable;
