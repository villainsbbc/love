import { memo } from "react";
import { Grid, Link } from "@mui/material";

export const Page404 = memo(() => {
  return (
    <>
      <Grid container alignItems="center" direction="column">
        <Grid>
          <h1>404 | NOT FOUND</h1>
        </Grid>
        <Grid>
          <p>お探しのページが見つかりませんでした。</p>
        </Grid>
        <Grid>
          <Link href="/">Topに戻る</Link>
        </Grid>
      </Grid>
    </>
  );
});
