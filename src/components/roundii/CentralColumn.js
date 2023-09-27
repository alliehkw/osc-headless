import { Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
function CentralColumn({}) {
  const theme = useTheme();
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8} sx={{ mx: "auto" }}>
          <p styles={{ color: theme.palette.bodyText }}>
            Orthopaedic Specialty Clinic of Spokane aims to provide the absolute
            highest-quality orthopaedic care in the Inland Northwest. We
            specialize in hip, knee, and shoulder care, including joint
            reconstruction and replacement, physical therapy, occupational
            therapy, and sports medicine. We perform more orthopaedic research
            than any other clinic in the Inland Northwest and are the #1 highest
            rated for customer satisfaction in our area. <br></br>
            <br></br>We understand that navigating insurance is tough. That’s
            why we work with almost all major insurance providers. Even if we’re
            out of your network, though, our options like outpatient surgery
            could cost less out-of-pocket than the same procedure from a
            provider within your network.
          </p>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "inline-flex",
          paddingTop: theme.spacing(2),
          alignItems: "center",
          justifyContent: "center",
          gap: theme.spacing(1),
          flex: "1 0 0",
          flexWrap: "wrap",
        }}
      >
        <button className="green">make an appointment</button>
        <button className="white">learn more about our specialties</button>
      </Box>
    </>
  );
}

export default CentralColumn;
