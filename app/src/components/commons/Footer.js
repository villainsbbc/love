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
          backgroundColor:"rgb(3, 15, 67)",
          height:"3vw",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
        }}
      >
        <Link href="attention" sx={{ 
            color:"#fff",
            fontSize:"85%",
            textDecoration:"none",
            "&:hover": {
              color: "#F7CB4D",
              borderBottom: "2px solid #F7CB4D"
            }
          }}
        >
          当サイトの取り扱い
        </Link>
      </Box>
        <Typography sx={{ 
          textAlign:"center",
          fontSize:"1.5vw",
          p:"2%"
        }}>
          &copy; { getYear() } Villains
        </Typography>
    </>
  )
}
export default Footer;