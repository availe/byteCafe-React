import { Box, Typography } from "@mui/material";
const AboutMiddle = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography variant="h2" component="h2" sx={{ marginLeft: "12.5vw" }}>
        Our leadership
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "1",
            gap: "1rem",
            paddingLeft: "7vw",
            paddingRight: "7vw",
            textAlign: "center",
          }}
        >
          <Typography>
            Ever since our founder Casey David created byteCafe in 1891, our
            mission has been to provide high quality organic coffee. Sourced
            straight from locally-owned sustainable farms across South America,
            our famous coffees provide a taste unmatched across the Northeast.
            We continuously seek to improve our selection of foods and drinks
            while keeping true to our quality standards.
          </Typography>
          <Typography>
            At the heart of byteCafe is our community - the coffee lovers that
            made our business possible. We seek to contribute a peaceful
            relaxing atmosphere where people can come in to hang out, study, and
            enjoy a nice sip of coffee. Feel free to visit at any time.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", flex: "1" }}>
          <img
            src="assets/about_us_img.webp"
            alt="A cafe with soothing pink and yellow walls"
            width="100%"
            height="auto"
          />
          <Typography variant="caption">
            Our commitment to quality stops not at taste, but also at the
            atmosphere we seek to provide
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMiddle;
