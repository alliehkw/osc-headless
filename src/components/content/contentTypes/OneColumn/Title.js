import { Grid } from "@mui/material";

function Title({ title_data }) {
  let titleElement;
  let paddingDetails = title_data.customPaddingDetails;

  let titleWidth;
  switch (title_data.titleWidth[0]) {
    case "auto":
      titleWidth = 10;
      break;
    case "full":
      titleWidth = 12;
      break;
    case "half":
      titleWidth = 6;
      break;
    case "threequarter":
      titleWidth = 8;
      break;
  }

  switch (title_data.titleSize[0]) {
    case "h1":
      titleElement = (
        <h1 styles={{ textAlignment: title_data.textAlignment }}>
          {title_data.title}
        </h1>
      );
      break;
    case "h2":
      titleElement = (
        <h2 styles={{ textAlignment: title_data.textAlignment }}>
          {title_data.title}
        </h2>
      );
      break;
    case "h3":
      titleElement = (
        <h3 styles={{ textAlignment: title_data.textAlignment }}>
          {title_data.title}
        </h3>
      );
      break;
    default:
      titleElement = <h4>{title_data.title}</h4>;
  }

  return (
    <Grid
      container
      sx={{
        textAlign: `${title_data.textAlignment}`,
        maxWidth: "1440px",
      }}
    >
      <Grid
        item
        xs={12}
        sm={titleWidth}
        md={titleWidth}
        lg={titleWidth}
        xl={titleWidth}
        sx={{
          mx: title_data.textAlignment === "center" ? "auto" : "auto",
          ...(title_data.customPadding && {
            paddingTop: `${paddingDetails.paddingTop}px`,
            paddingBottom: `${paddingDetails.paddingBottom}px`,
            paddingLeft: `${paddingDetails.paddingLeft}px`,
            paddingRight: `${paddingDetails.paddingRight}px`,
          }),
        }}
      >
        {titleElement}
      </Grid>
    </Grid>
  );
}

export default Title;
