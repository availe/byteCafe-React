import { Box, Typography } from "@mui/material";
import CartTable from "./CartTable";

const Cart = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "Center",
        gap: "1.5rem",
        marginLeft: "5vw",
        marginRight: "5vw",
        marginTop: "2vh",
      }}
    >
      <Typography variant="h2" component="h2">
        Cart
      </Typography>
      <CartTable />
    </Box>
  );
};

export default Cart;
