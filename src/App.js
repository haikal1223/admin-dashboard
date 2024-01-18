import React from "react";
import Navbar from "./components/Navbar";
import { Box, Grid } from "@mui/material";
import TodaySection from "./Section/TodaySection";
import ChartSection from "./Section/ChartSection";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Grid container>
      <Grid item xs={0.5}>
        <Sidebar />
      </Grid>

      <Grid item xs={11.5}>
        <Box bgcolor="#eeeff0" height="100%">
          <Navbar />
          <Grid container>
            <Grid container item mt={2} columnSpacing={2} px="24px">
              <Grid item xs={4}>
                <TodaySection />
              </Grid>
              <Grid item xs={8}>
                <ChartSection />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default App;
