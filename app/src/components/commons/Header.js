import React from 'react';
import { Link } from "@mui/material";
import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const customStyles = {
  root: {
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: '100%',
    width: '70%',
  },
  title: {
    fontSize: "3vw",
    fontWeight: "bold"
  },
  sns: {
    textAlign: 'right'
  },
  snsLogo: {
    height: '100%',
    width: '25%',
    margin: '1.5%',
  }
};

const Header = () =>{ 
  return(
    <>
      <AppBar position="static" color="default">
        <Grid container style= { customStyles.root }>
          <Grid item xs={2}>
            <Link href="/home">
              <img 
                src="/images/logo.png" 
                alt= "チームロゴ"
                style= { customStyles.img }
              />
            </Link>
          </Grid>
          <Grid item xs={7}>
            <Typography style={ customStyles.title }>
              女子軟式野球チーム Villains(ヴィランズ)
            </Typography>
          </Grid>
          <Grid item xs={3} style= {customStyles.sns}>
            <Link href="https://www.instagram.com/villains_bbc/">
              <img src="/images/sns/insta.webp" alt="インスタロゴ" style= {customStyles.snsLogo}/>
            </Link>
            <Link href="https://www.facebook.com/villains89/">
              <img src="/images/sns/fb.png" alt="フェイスブックロゴ" style= {customStyles.snsLogo}/>
            </Link>
            <Link href="https://twitter.com/Villains_bbc">
              <img src="/images/sns/twitter.png" alt="ツイッターロゴ" style= {customStyles.snsLogo} />
            </Link>
          </Grid>
        </Grid>
      </AppBar>
    </>
  )
}
export default Header;