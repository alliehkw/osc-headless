import { Grid, Box } from "@mui/material";

function Title({ title_data }) {
  let titleElement;
  console.log("title_data", title_data);

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
        <Grid
          item
          xs={12}
          sm={titleWidth}
          md={titleWidth}
          lg={titleWidth}
          xl={titleWidth}
          sx={{ mx: "auto" }}
        >
          <h1 styles={{ textAlignment: title_data.textAlignment }}>
            {title_data.title}
          </h1>
        </Grid>
      );
      break;
    case "h2":
      titleElement = (
        <Grid
          item
          xs={12}
          sm={titleWidth}
          md={titleWidth}
          lg={titleWidth}
          xl={titleWidth}
          sx={{ mx: "auto" }}
        >
          <h2 styles={{ textAlignment: title_data.textAlignment }}>
            {title_data.title}
          </h2>
        </Grid>
      );
      break;
    default:
      titleElement = (
        <Grid
          item
          xs={12}
          sm={titleWidth}
          md={titleWidth}
          lg={titleWidth}
          xl={titleWidth}
          sx={{
            mx: "auto",
          }}
        >
          <h3>{title_data.title}</h3>
        </Grid>
      );
  }

  return (
    <Grid
      container
      sx={{
        textAlign: `${title_data.textAlignment}`,
      }}
    >
      {titleElement}
    </Grid>
  );
}

export default Title;
