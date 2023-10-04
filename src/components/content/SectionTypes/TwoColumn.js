import { Grid } from "@mui/material";
import Column from "./TwoColumn/Column.js";
function TwoColumn({ column_data, column_layout }) {
  console.log("column_data", column_data);
  let leftWidth;
  let rightWidth;
  switch (column_layout[0]) {
    case "fiveColsixCol":
      leftWidth = 5;
      rightWidth = 6;
      break;
    case "sixColfiveCol":
      leftWidth = 6;
      rightWidth = 5;
      break;
    case "sixColsixCol":
      leftWidth = 6;
      rightWidth = 6;
      break;
    case "threeColnineCol":
      leftWidth = 3;
      rightWidth = 9;
      break;
    case "nineColthreeCol":
      leftWidth = 9;
      rightWidth = 3;
  }
  return (
    <Grid
      container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Grid item xs={12} sm={12} md={leftWidth} lg={leftWidth} xl={leftWidth}>
        <div
          className={column_data[0].gap[0]}
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "red",
            justifyContent: "center",
          }}
        >
          <h1>peaches</h1>
          <p>aaa</p>
          <h1>peaches</h1>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={rightWidth}
        lg={rightWidth}
        xl={rightWidth}
      >
        <div
          className={column_data[1].gap[0]}
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "blue",
            justifyContent: "center",
          }}
        >
          <h1>peaches</h1>
          <h1>peaches</h1>
        </div>
      </Grid>
    </Grid>
  );
}

export default TwoColumn;
