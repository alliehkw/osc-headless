// import "../../styles/hero.css";
import { Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ReactPlayer from "react-player";
import Play from "../../icons/Play.js";
import { useState } from "react";

function Hero({ hero_data }) {
  let paddingDetails = hero_data.customPaddingDetails;

  const [playing, setPlaying] = useState(false);
  const [display, setDisplay] = useState("block");
  const theme = useTheme();

  function handleStartVideo() {
    setPlaying(true);
    setDisplay("none");
  }
  return (
    // Conditionally render either the video hero or the standard hero
    <>
      {hero_data.heroType === "video" ? (
        <Box
          className="section video hero"
          sx={{
            position: "relative",
            color: theme.palette[hero_data.textColor[0]],
            ...(hero_data.customPadding && {
              paddingTop: `${paddingDetails.paddingTop}px`,
              paddingBottom: `${paddingDetails.paddingBottom}px`,
              paddingLeft: `${paddingDetails.paddingLeft}px`,
              paddingRight: `${paddingDetails.paddingRight}px`,
            }),
          }}
        >
          <Box
            sx={{
              position: "absolute",
              height: "100%",
              ...(hero_data.customPadding && {
                paddingTop: `${paddingDetails.paddingTop}px`,
                paddingBottom: `${paddingDetails.paddingBottom}px`,
                paddingLeft: `${paddingDetails.paddingLeft}px`,
                paddingRight: `${paddingDetails.paddingRight}px`,
              }),
            }}
          >
            <ReactPlayer
              url={hero_data.videoUrl}
              width="100vw"
              height="100%"
              controls={false}
              light={hero_data.posterImage.node.mediaItemUrl}
              onClickPreview={handleStartVideo}
              playing={playing}
              playIcon={<Play />}
              className="video"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "30%",
              display: { display },
            }}
          >
            <Grid container>
              <Grid
                item
                xs={10}
                sm={10}
                md={8}
                lg={8}
                xl={8}
                sx={{ mx: "auto" }}
              >
                <Box
                  xs={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "auto",
                  }}
                >
                  <p className="allCaps">{hero_data.subTitle}</p>
                  <h1 style={{ textAlign: "center" }}>{hero_data.title}</h1>
                </Box>
              </Grid>
            </Grid>
          </Box>
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
