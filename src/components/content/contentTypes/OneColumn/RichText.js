import { Grid } from "@mui/material";

function RichText({ rich_text_data }) {
  let paddingDetails = rich_text_data.customPaddingDetails;

  let richTextWidth;
  switch (rich_text_data.richTextWidth[0]) {
    case "auto":
      richTextWidth = 10;
      break;
    case "full":
      richTextWidth = 12;
      break;
    case "half":
      richTextWidth = 6;
      break;
    case "threequarter":
      richTextWidth = 8;
      break;
  }

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={12}
        md={richTextWidth}
        lg={richTextWidth}
        xl={richTextWidth}
        sx={{
          mx: rich_text_data.columnAlignment === "center" ? "auto" : "0",
          ...(rich_text_data.customPadding && {
            paddingTop: `${paddingDetails.paddingTop}px`,
            paddingBottom: `${paddingDetails.paddingBottom}px`,
            paddingLeft: `${paddingDetails.paddingLeft}px`,
            paddingRight: `${paddingDetails.paddingRight}px`,
          }),
        }}
      >
        <p
          className="bodyText"
          dangerouslySetInnerHTML={{
            __html: rich_text_data.textContent,
          }}
        ></p>
      </Grid>
    </Grid>
  );
}

export default RichText;
