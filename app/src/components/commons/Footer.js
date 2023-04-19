import React from "react";
import { Link, Box, Typography } from "@mui/material";

//著者権年号の取得
const getYear = () => {
  let date = new Date();
  return date.getFullYear();
} 

const Footer = () =>{ 
  return(
    <>
      <Box component="footer" sx={{ 
          textAlign:"center",
          backgroundColor:"rgb(3, 15, 67)",
          height:"3vw",
        }}
      >
        <Link href="attention.html" sx={{ 
            color:"#fff",
            fontSize:"50%",
            textDecoration:"none",
            "&:hover": {
              color: "#F7CB4D",
              borderBottom: "2px solid #F7CB4D"
            }
          }}
        >
          当サイトの取り扱い
        </Link>
        <Typography sx={{ 
          textAlign:"center",
          fontSize:"60%",
          p:"2%"
        }}>
          &copy; { getYear() } Villains
        </Typography>
      </Box>
    </>
  )
}
export default Footer;