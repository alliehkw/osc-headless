import ReactPlayer from "react-player";
import Play from "../../../../icons/Play.js";
import { useState } from "react";
import { Grid } from "@mui/material";

function Video({ video_data, screenSize }) {
  let videoWidth;
  switch (video_data.videoWidth[0]) {
    case "auto":
      videoWidth = 10;
      break;
    case "full":
      videoWidth = 12;
      break;
    case "half":
      videoWidth = 6;
      break;
    case "threequarter":
      videoWidth = 8;
      break;
  }

  let videoHeight;
  if (screenSize.width < 600 && screenSize.width > 0) {
    videoHeight = video_data.videoHeightDimensions.mobileHeight;
  } else if (screenSize.width >= 600 && screenSize.width < 1023) {
    videoHeight = video_data.videoHeightDimensions.tabletHeight;
  } else if (screenSize.width >= 1024) {
    videoHeight = video_data.videoHeightDimensions.desktopHeight;
  }

  const [playing, setPlaying] = useState(false);

  function handleStartVideo() {
    setPlaying(true);
  }
  return (
    <div className="video-section">
      <Grid
        container
        sx={{
          textAlign: `${video_data.videoAlignment}`,
          maxWidth: "1440px",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={videoWidth}
          lg={videoWidth}
          xl={videoWidth}
          sx={{
            mx: video_data.videoAlignment === "center" ? "auto" : "0",
            height: videoHeight,
          }}
        >
          <ReactPlayer
            url={video_data.videoUrl}
            width="100%"
            height="100%"
            controls={false}
            light={video_data.posterImage.node.mediaItemUrl}
            onClickPreview={handleStartVideo}
            playing={playing}
            playIcon={<Play />}
            className="video"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Video;
