import { Grid } from "@mui/material";
import Tab from "./Tab.js";

function Accordion({ accordion_data, screenSize }) {
  let accordionWidth;
  switch (accordion_data.accordionWidth[0]) {
    case "auto":
      accordionWidth = 10;
      break;
    case "full":
      accordionWidth = 12;
      break;
    case "half":
      accordionWidth = 6;
      break;
    case "threequarter":
      accordionWidth = 8;
      break;
  }

  let tabsBlock = accordion_data.tab.map((tab, index) => {
    return <Tab key={index} tab_data={tab} />;
  });

  return (
    <Grid container sx={{ maxWidth: "1440px" }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={accordionWidth}
        lg={accordionWidth}
        xl={accordionWidth}
        sx={{ margin: "auto" }}
      >
        <div
          className="some"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {tabsBlock}
        </div>
      </Grid>
    </Grid>
  );
}

export default Accordion;
