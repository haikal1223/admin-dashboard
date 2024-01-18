import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import AttendanceDailyChart from "./components/AttendanceDailyChart";

const AttendanceDaily = () => {
  return (
    <Box sx={{ bgcolor: "#ffffff" }} p="24px" borderRadius="8px">
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography fontWeight={700}>Attendance - Daily</Typography>
        <Stack flexDirection="row" gap="12px">
          <Stack
            bgcolor="#f3373e"
            width="50px"
            borderRadius="12px"
            alignItems="center"
            justifyContent="center"
            color="#ffffff"
          >
            1 W
          </Stack>
          <Stack flexDirection="row">
            <Stack
              width="50px"
              alignItems="center"
              border="2px solid black"
              justifyContent="center"
              sx={{
                borderTopLeftRadius: "12px",
                borderBottomLeftRadius: "12px",
              }}
            >
              Oct
            </Stack>
            <Stack
              width="50px"
              alignItems="center"
              justifyContent="center"
              border="1px solid black"
              sx={{
                borderTopRightRadius: "12px",
                borderBottomRightRadius: "12px",
              }}
            >
              2023
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <AttendanceDailyChart />
    </Box>
  );
};

export default AttendanceDaily;
