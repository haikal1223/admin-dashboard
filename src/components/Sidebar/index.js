import React from "react";
import { Box, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import ConstructionIcon from "@mui/icons-material/Construction";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const Sidebar = () => {
  const menuItems = [
    { icon: <HomeIcon /> },
    { icon: <StickyNote2Icon /> },
    { icon: <ConstructionIcon /> },
    { icon: <AccessAlarmIcon /> },
    { icon: <AccessibilityNewIcon /> },
  ];

  return (
    <Box bgcolor="#98191f" height="100%">
      <Stack>
        <Box width="100%" position="relative">
          <Box position="absolute" right={-12}>
            <ExpandCircleDownIcon sx={{ color: "#67748d" }} />
          </Box>
        </Box>
        <Stack justifyContent="center" alignItems="center" gap="12px" mt="64px">
          {menuItems.map((item, index) => (
            <Stack
              alignItems="center"
              width="100%"
              bgcolor={index === 0 ? "#f3373e" : "none"}
              borderRadius="8px"
            >
              <Box
                bgcolor="#ffffff"
                width="fit-content"
                p="12px"
                borderRadius="8px"
              >
                {item.icon}
              </Box>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
