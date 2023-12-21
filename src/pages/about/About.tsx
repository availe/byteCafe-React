import AboutTop from "./AboutTop";
import AboutMiddle from "./AboutMiddle";
import { Fragment } from "react";
import AboutBottomI from "./AboutBottomI";
import AboutBottomII from "./AboutBottomII";
import { Box } from "@mui/material";

const About = () => {
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
          alignItems: "center",
          marginLeft: "5vw",
          marginRight: "5vw",
          marginTop: "2vh",
        }}
      >
        <AboutTop />
        <AboutMiddle />
        <AboutBottomI />
        <AboutBottomII />
      </Box>
    </Fragment>
  );
};
export default About;
