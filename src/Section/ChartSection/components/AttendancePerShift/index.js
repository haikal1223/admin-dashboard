import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import AttendancePerShiftChart from "./Components/AttendancePerShiftChart";

const AttendancePerShift = () => {
  return (
    <Box sx={{ bgcolor: "#ffffff" }} p="24px" borderRadius="8px">
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography fontWeight={700}>Attendance - Per Shift</Typography>
      </Stack>
      <AttendancePerShiftChart />
    </Box>
  );
};

export default AttendancePerShift;
