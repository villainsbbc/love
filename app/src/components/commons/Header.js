import React from "react";
import { Box, Link, Typography, Grid } from "@mui/material";

const snsImages = [
  {
    src: "/images/sns/insta.webp",
    alt: "insta-logo",
    href: "https://www.instagram.com/villains_bbc/",
  },
  {
    src: "/images/sns/fb.png",
    alt: "fb-logo",
    href: "https://www.facebook.com/villains89/",
  },
  {
    src: "/images/sns/twitter.png",
    alt: "twitter-logo",
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
            <Link key={index} href={item.href} target="_blank" rel="noreferrer">
              <Box
                component="img"
                src={item.src}
                alt={item.alt}
                height="100%"
                width="25%"
                margin="1.5%"
              />
            </Link>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
export default Header;
