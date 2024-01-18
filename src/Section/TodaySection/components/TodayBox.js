import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const TodayBox = ({ label, children }) => {
  return (
    <Grid item xs={6}>
      <Stack bgcolor="#ffffff" borderRadius="8px" p="12px" height="15rem">
        <Box sx={{ color: "#f3514d" }} fontWeight={700}>
          Today{" "}
          <Typography component="span" color="#83748d" fontWeight={700}>
            {label}
          </Typography>
        </Box>
        <Stack alignItems="center" height="100%">
          {children}
        </Stack>
      </Stack>
    </Grid>
  );
};

export default TodayBox;
