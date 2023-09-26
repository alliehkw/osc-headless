import { Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function RatingsBlock() {
  const theme = useTheme();
  return (
    <Grid item sm={12} md={12} lg={4} xl={4}>
      <Box
        sx={{
          display: "flex",
          padding: theme.spacing(2.5),
          flexDirection: "column",
          alignItems: "center",
          gap: theme.spacing(2),
          flex: "1 0 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: theme.spacing(2.5),
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: theme.spacing(0.5),
            borderRadius: "100px",
            minWidth: "42px",
            minHeight: "48px",
            backgroundColor: theme.palette.oscgreencolor04,
          }}
        >
          <p
            style={{
              color: theme.palette.white,
              fontFamily: "Petersburg",
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "120%",
            }}
          >
            3x
          </p>
        </Box>
        <p
          style={{ color: theme.palette.gray06 }}
          className="ratings-block-text"
        >
          Our primary knee infection rate is over 5 times better than the
          national average.
        </p>
      </Box>
    </Grid>
  );
}

export default RatingsBlock;
