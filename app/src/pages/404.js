import { memo } from "react";
import { Grid, Link } from "@mui/material";

export const Page404 = memo(() => {
  return (
    <>
      <Grid container alignItems="center" direction="column">
        <Grid item xs={12}>
          <h1>404 | NOT FOUND</h1>
        </Grid>
        <Grid item xs={12}>
          <p>お探しのページが見つかりませんでした。</p>
        </Grid>
        <Grid item xs={12}>
          <Link href="/">Topに戻る</Link>
        </Grid>
      </Grid>
    </>
  );
});
