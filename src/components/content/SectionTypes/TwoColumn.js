import { Grid } from "@mui/material";
import Column from "../contentTypes/TwoColumn/Column.js";
function TwoColumn({ column_data, column_layout, column_alignment }) {
  let leftWidth;
  let rightWidth;
  let spacerWidth;
  let spacerWidthTablet;
  switch (column_layout[0]) {
    case "fiveColsixCol":
      leftWidth = 5;
      rightWidth = 6;
      spacerWidth = 1;
      spacerWidthTablet = 0.5;
      break;
    case "sixColfiveCol":
      leftWidth = 6;
      rightWidth = 5;
      spacerWidth = 1;
      spacerWidthTablet = 0.5;
      break;
    case "sixColsixCol":
      leftWidth = 5.5;
      rightWidth = 5.5;
      spacerWidth = 1;
      spacerWidthTablet = 0;
      break;
    case "threeColnineCol":
      leftWidth = 3;
      rightWidth = 8;
      spacerWidth = 0;
      spacerWidthTablet = 0;
      break;
    case "nineColthreeCol":
      leftWidth = 8;
      rightWidth = 3;
      spacerWidth = 0;
      spacerWidthTablet = 0;
  }
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: column_alignment,
        margin: "auto",
        maxWidth: "1440px",
        height: "100%",
      }}
      rowSpacing={{ xs: 2, sm: 0, md: 0, lg: 0, xl: 0 }}
    >
      <Grid
        item
        xs={12}
        sm={leftWidth}
        md={leftWidth}
        lg={leftWidth}
        xl={leftWidth}
      >
        <div style={{ height: "100%" }}>
          <Column column_data={column_data[0]} />
        </div>
      </Grid>
      <Grid
        item
        xs={0}
        sm={spacerWidthTablet}
        md={spacerWidth}
        lg={spacerWidth}
        xl={spacerWidth}
      ></Grid>
      <Grid
        item
        xs={12}
        sm={rightWidth}
        md={rightWidth}
        lg={rightWidth}
        xl={rightWidth}
      >
        <div style={{ height: "100%" }}>
          <Column column_data={column_data[1]} />
        </div>
      </Grid>
    </Grid>
  );
}

export default TwoColumn;
