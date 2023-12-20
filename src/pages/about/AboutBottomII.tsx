import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const AboutBottomII = () => {
  return (
    <Box
      component="form"
      action="post"
      encType="text/plain"
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Typography>Contact Form</Typography>
      <TextField
        label="Email"
        type="email"
        name="Email"
        sx={{ marginBottom: "1rem", width: "70vw" }}
      />
      <TextField
        label="Message"
        name="Message"
        type="text"
        multiline
        rows={14} // apparently you must use rows instead of height
        sx={{ marginBottom: "1rem", width: "70vw" }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ width: "30%", alignSelf: "center" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default AboutBottomII;
