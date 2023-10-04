import { Grid } from "@mui/material";

function StatsCard({ stat_card_data }) {
  const statsBlock = stat_card_data.column.map((stat, index) => {
    return (
      <Grid item key={index} xs={12} sm={12} md={4} lg={4} xl={4}>
        <div
          className="statBlock"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <div
            className={`${stat.textColor} ${
              stat.backgroundUnderStat ? stat.backgroundShape[0] : null
            }`}
            style={{ width: "122px" }}
          >
            <p className="statText">{stat.statText}</p>
          </div>
          <div>
            <p className="statDescription">{stat.statDescription}</p>
          </div>
        </div>
      </Grid>
    );
  });
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      {statsBlock}
    </Grid>
  );
}

export default StatsCard;
