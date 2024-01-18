import React from "react";
import AttendanceDaily from "./components/AttendanceDaily";
import { Grid } from "@mui/material";
import AttendancePerShift from "./components/AttendancePerShift";

const ChartSection = () => {
  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <AttendanceDaily />
      </Grid>
      <Grid item xs={12}>
        <AttendancePerShift />
      </Grid>
    </Grid>
  );
};

export default ChartSection;
