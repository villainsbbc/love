import React from "react";
import { Link, Box, Typography } from "@mui/material";

//著者権年号の取得
const getYear = () => {
  let date = new Date();
  return date.getFullYear();
};

const Footer = () => {
  return (
    <>
      <Box
        height="4vw"
        alignItems="center"
        justifyContent="center"
        bgcolor="rgb(3, 15, 67)"
        display="flex"
      >
        <Link
          href="attention.html"
          sx={{
            textDecoration: "none",
            "&:hover": {
              color: "#F7CB4D",
              borderBottom: "2px solid #F7CB4D",
            },
          }}
        >
          <Typography fontSize="1.5vw" color="#fff">
            当サイトの取り扱い
          </Typography>
        </Link>
      </Box>
      <Typography p="1%" textAlign="center" fontSize="1.5vw">
        &copy; {getYear()} Villains
      </Typography>
    </>
  );
};
export default Footer;
