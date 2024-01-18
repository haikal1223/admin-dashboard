import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  Switch,
} from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f9fa" }} p="24px">
      <Stack justifyContent="space-between" direction="row">
        <Typography fontSize="28px" fontWeight={700}>
          Dashboard Attendance
        </Typography>
        <Stack direction="row" alignItems="center">
          <Box width="175px">
            <FormControl fullWidth>
              <InputLabel>--All Organization--</InputLabel>
              <Select fullWidth>
                <MenuItem>Test</MenuItem>
                <MenuItem>Test</MenuItem>
                <MenuItem>Test</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            px="12px"
          >
            <WbSunnyIcon />
            <Switch />
            <DarkModeIcon />
          </Stack>
          <LogoutIcon />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
