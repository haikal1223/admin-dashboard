import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const TextReport = ({ label, person, totalPerson }) => {
  return (
    <Stack justifyContent="center" alignItems="center" height="100%">
      <Typography fontSize="27px" fontWeight={700}>
        {person}
      </Typography>
      <Typography>
        {label === "Feed Activity" ? (
          <Box fontWeight={700}>
            OF{" "}
            <Typography component="span" color="#6bde83" fontWeight={700}>
              {totalPerson}
            </Typography>{" "}
            PERSON
          </Box>
        ) : (
          <Typography fontWeight={700}>Person</Typography>
        )}
      </Typography>
    </Stack>
  );
};

export default TextReport;
