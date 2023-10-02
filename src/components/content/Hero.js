// import "../../styles/hero.css";
import { Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Hero({ hero_data }) {
  console.log(hero_data);
  const theme = useTheme();
  return (
    // Conditionally render either the video hero or the standard hero
    <>
      {hero_data.heroType === "video" ? (
        <Box
          className="section video"
          sx={{
            color: theme.palette[hero_data.textColor[0]],
            backgroundColor: "pink",
          }}
        >
          <Grid container>
            <Grid item xs={10} sm={10} md={8} lg={8} xl={8} sx={{ mx: "auto" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                }}
              >
                <p className="allCaps">{hero_data.subTitle}</p>
                <h1 style={{ textAlign: "center" }}>{hero_data.title}</h1>
                <div className="hero-video">
                  <p>handle home hero video</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Grid
          container
          className={`section ${hero_data.heroHeight}`}
          style={{
            backgroundColor: theme.palette.oscbrandcolor,
            color: theme.palette.white,
          }}
        >
          <Grid item xs={12} sm={8} md={12} lg={12} xl={12} sx={{ mx: "auto" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                alignItems: "center",
                margin: "auto",
                maxWidth:
                  hero_data.titleWidth[0] === "auto" ? "655px" : "1440px",
              }}
            >
              <p className="allCaps">{hero_data.subtitle}</p>
              <h1>{hero_data.title}</h1>
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default Hero;
