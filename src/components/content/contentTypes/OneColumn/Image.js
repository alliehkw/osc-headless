import { Grid } from "@mui/material";

function Image({ image_data, screenSize }) {
  let paddingDetails = image_data.customPaddingDetails;
  
  let imageHeight;
  if (screenSize.width < 600 && screenSize.width > 0) {
    imageHeight = image_data.imageHeightDimensions.mobileHeight;
  } else if (screenSize.width >= 600 && screenSize.width < 1023) {
    imageHeight = image_data.imageHeightDimensions.tabletHeight;
  } else if (screenSize.width >= 1024) {
    imageHeight = image_data.imageHeightDimensions.desktopHeight;
  }

  let imageWidth;
  switch (image_data.imageWidth[0]) {
    case "auto":
      imageWidth = 10;
      break;
    case "full":
      imageWidth = 12;
      break;
    case "half":
      imageWidth = 6;
      break;
    case "threequarter":
      imageWidth = 8;
      break;
  }

  return (
    <Grid
      container
      sx={{
        textAlign: `${image_data.imageAlignment}`,
      }}
    >
      <Grid
        item
        xs={12}
        sm={imageWidth}
        md={imageWidth}
        lg={imageWidth}
        xl={imageWidth}
        sx={{
          mx: image_data.imageAligment === "center" ? "auto" : "0",
          ...(image_data.customPadding && {
            paddingTop: `${paddingDetails.paddingTop}px`,
            paddingBottom: `${paddingDetails.paddingBottom}px`,
            paddingLeft: `${paddingDetails.paddingLeft}px`,
            paddingRight: `${paddingDetails.paddingRight}px`,
          }),
        }}
      >
        <div className="image-wrapper" style={{ height: imageHeight }}>
          <img
            src={image_data.image.node.mediaItemUrl}
            alt={image_data.image.node.altText}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default Image;
