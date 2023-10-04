import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

function MediaCard({ media_card_data, screenSize }) {
  console.log("media_card_data", media_card_data);
  let spacingSize;
  let imageHeight;
  let imageWidth;
  if (screenSize.width < 600 && screenSize.width > 0) {
    spacingSize = 2.5;
    imageHeight = "251.25px";
    imageWidth = "335px";
  } else if (screenSize.width >= 600 && screenSize.width < 1023) {
    spacingSize = 2.5;
    imageHeight = "433.125px";
    imageWidth = "770px";
  } else if (screenSize.width >= 1024) {
    spacingSize = 1.5;
    imageHeight = "280px";
    imageWidth = "384px";
  }
  let columns = media_card_data.column.map((column, index) => {
    let overlayBackground;
    if (column.overlay) {
      overlayBackground = column.overlay.map((overlay, index) => {
        console.log("column", column);
        console.log("column.overlayPosition", column.overlayPosition);
        let top = "0";
        let bottom = "0";
        let left = "0";
        let right = "0";
        let backgroundColor = column.overlay[0].backgroundUnderOverlay
          ? "#008771"
          : null;
        if (column.imageOverlay) {
          switch (column.overlay[0].overlayPosition[0]) {
            case "topLeft":
              top = "5%";
              left = "5%";
              break;
            case "topRight":
              top = "5%";
              right = "5%";
              break;
            case "bottomLeft":
              bottom = "5%";
              left = "5%";
              break;
            case "bottomRight":
              bottom = "5%";
              right = "5%";
              break;
          }
        }
        return (
          <div
            className="overlay-text"
            key={index}
            style={{
              backgroundColor: backgroundColor,
              top: top,
              bottom: bottom,
              left: left,
              right: right,
            }}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: overlay.overlayText,
              }}
            ></p>
          </div>
        );
      });
    }

    console.log("overlayBackground", overlayBackground);

    return (
      <Grid
        item
        key={index}
        xs={12}
        sm={12}
        md={4}
        lg={4}
        xl={4}
        sx={{ textAlign: "left" }}
      >
        <div className="image-wrapper">
          <div
            className="image-container"
            style={{ height: imageHeight, width: imageWidth }}
          >
            <img
              src={column.image.node.mediaItemUrl}
              alt={column.image.node.altText}
            />
            {column.imageOverlay ? overlayBackground : null}
          </div>
        </div>
        <div style={{ height: "24px" }}></div>
        <h5 style={{ textAlign: "left" }}>{column.title}</h5>
        <div style={{ height: "16px" }}></div>
        <p className="subtext" style={{ textAlign: "left" }}>
          {column.description}
        </p>
        <div style={{ height: "16px" }}></div>
        {/* TO DO: hook up post link!!  */}
        {column.linkType === "page" ? (
          <button className="transparent" style={{ padding: 0 }}>
            <Link to={column.pageLink.node.slug}>{`Read More >>>`}</Link>
          </button>
        ) : (
          <p>still need to hook up link!</p>
        )}
      </Grid>
    );
  });
  return (
    <Grid container spacing={spacingSize}>
      {columns}
    </Grid>
  );
}

export default MediaCard;
