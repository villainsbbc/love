import React from "react";
import { Box, Link, Typography, Grid } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const snsImages = [
  {
    icon: <InstagramIcon sx={{ color: "#E4405F", fontSize:"7vw" }}/>, 
    href: "https://www.instagram.com/villains_bbc/",
  },
  {
    icon: <FacebookIcon sx={{ color: "#1877F2", fontSize:"7vw" }}/>, 
    href: "https://www.facebook.com/villains89/",
  },
  {
    icon: <TwitterIcon sx={{ color: "#1d9bf0", fontSize:"7vw" }}/>, 
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
          {snsImages.map((item, index) => (
            <Link key={index} href={item.href} target="_blank" rel="noreferrer"
            sx={{
              height: "100%",
              width: "25%",
              margin: "1.5%",
              }}>
              {item.icon}
            </Link>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
export default Header;
