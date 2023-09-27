import Grid from "@mui/material/Grid";
import RatingsBlock from "./RatingsBlock.js";
import CentralColumn from "./CentralColumn.js";
import { useTheme } from "@mui/material/styles";

function Home() {
  const theme = useTheme();
  return (
    <>
      <div className="section" style={{ backgroundColor: theme.palette.white }}>
        <CentralColumn />
      </div>
      <div
        className="section"
        style={{ backgroundColor: theme.palette.gray01 }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={8}
            md={8}
            lg={8}
            xl={6}
            sx={{ textAlign: "center", margin: "auto" }}
          >
            <h2 style={{ color: theme.palette.gray06 }}>
              We offer better care and faster recovery times.
            </h2>
          </Grid>
        </Grid>
        <Grid container>
          <RatingsBlock />
          <RatingsBlock />
          <RatingsBlock />
        </Grid>
      </div>
    </>
  );
}

export default Home;
