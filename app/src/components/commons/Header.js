import React from "react";
import { Box, Link, Typography, Grid } from "@mui/material";
import { Instagram, Facebook, Twitter } from "@mui/icons-material";

const sns_icon_size = "7vw" ;

const snsIcons = [
  {
    icon: <Instagram sx={{ color: "#E4405F", fontSize:sns_icon_size }}/>, 
    href: "https://www.instagram.com/villains_bbc/",
  },
  {
    icon: <Facebook sx={{ color: "#1877F2", fontSize:sns_icon_size }}/>, 
    href: "https://www.facebook.com/villains89/",
  },
  {
    icon: <Twitter sx={{ color: "#1d9bf0", fontSize:sns_icon_size }}/>, 
    href: "https://twitter.com/Villains_bbc",
  },
];



const Header = () => {
  return (
    <>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={2}>
          <Link href="/home">
            <Box
              component="img"
              src="/images/logo.png"
              alt="チームロゴ"
              height="100%"
              width="70%"
            />
          </Link>
        </Grid>
        <Grid item xs={7}>
          <Typography fontSize="3vw" fontWeight="bold">
            女子軟式野球チーム Villains(ヴィランズ)
          </Typography>
        </Grid>
        <Grid item xs={3} textAlign="right">
          {snsIcons.map((item, index) => (
            <Link key={index} href={item.href} target="_blank" rel="noreferrer">
              {item.icon}
            </Link>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
export default Header;
