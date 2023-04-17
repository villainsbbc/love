import React from "react";
import { AppBar, Link, Typography, Grid } from "@mui/material";

const customStyles = {
  root: {
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: "100%",
    width: "70%",
  },
  title: {
    fontSize: "3vw",
    fontWeight: "bold",
  },
  sns: {
    textAlign: "right",
  },
  snsLogo: {
    height: "100%",
    width: "25%",
    margin: "1.5%",
  },
};

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
      <AppBar position="static" color="default">
        <Grid container style={customStyles.root}>
          <Grid item xs={2}>
            <Link href="/home">
              <img
                src="/images/logo.png"
                alt="チームロゴ"
                style={customStyles.img}
              />
            </Link>
          </Grid>
          <Grid item xs={7}>
            <Typography style={customStyles.title}>
              女子軟式野球チーム Villains(ヴィランズ)
            </Typography>
          </Grid>
          <Grid item xs={3} style={customStyles.sns}>
            {snsImages.map((item) => (
              <Link href={item.href} target="_blank" rel="noreferrer">
                <img
                  src={item.src}
                  alt={item.alt}
                  style={customStyles.snsLogo}
                />
              </Link>
            ))}
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};
export default Header;
