import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

function MediaCard({ media_card_data, screenSize }) {
  let imageHeight;
  if (screenSize.width < 600 && screenSize.width > 0) {
    imageHeight = "251.25px";
  } else if (screenSize.width >= 600 && screenSize.width < 1023) {
    imageHeight = "433.125px";
  } else if (screenSize.width >= 1024) {
    imageHeight = "280px";
  }
  let columns = media_card_data.column.map((column, index) => {
    let overlayBackground;
    if (column.overlay) {
      overlayBackground = column.overlay.map((overlay, index) => {
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

    return (
      <Grid
        item
        key={index}
        xs={12}
        sm={12}
        md={4}
        lg={4}
        xl={4}
        sx={{
          textAlign: "left",
        }}
      >
        <div className="image-wrapper">
          <div
            className="image-container"
            style={{ height: imageHeight, width: "100%" }}
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
          <button
            className="transparent"
            style={{ padding: 0, textAlign: "left" }}
          >
            <Link to={column.pageLink.node.slug}>{`Read More >>>`}</Link>
          </button>
        ) : (
          <p>still need to hook up link!</p>
        )}
      </Grid>
    );
  });
  return (
    <Grid
      container
      columnSpacing={{ xs: 0, sm: 0, md: 1.5, lg: 1.5, xl: 1.5 }}
      rowSpacing={{ xs: 2.5, sm: 2.5, md: 0, lg: 0, xl: 0 }}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      {columns}
    </Grid>
  );
}

export default MediaCard;
