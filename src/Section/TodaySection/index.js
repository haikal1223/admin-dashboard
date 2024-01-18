import { Box, Grid } from "@mui/material";
import React from "react";
import TodayBox from "./components/TodayBox";
import TextReport from "./components/TextReport";
import PieChartReport from "./components/PieChartReport";
import todayData from "../../static/file1.json";

const TodaySection = () => {
  const data = Object.entries(todayData).map(([label, values]) => {
    let modifiedLabel = label.replace("Card ", ""); // Remove "Card " from label
    if (label === "Card On Duty") {
      return {
        label: "On Duty",
        type: "pieChart",
        person: values["On Duty"],
        totalPerson: values["Total"],
      };
    } else if (label === "Card Attendance") {
      return {
        label: "Attendance",
        type: "pieChart",
        person: values["Attend"],
        totalPerson: values["Total"],
      };
    } else {
      const person =
        values["Total feed"] !== undefined
          ? values["Total feed"]
          : values["Total person"] || values["Total Patrol"];
      const totalPerson =
        values["Total person"] !== undefined
          ? values["Total person"]
          : undefined;
      return { label: modifiedLabel, type: "text", person, totalPerson };
    }
  });

  return (
    <Box>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <TodayBox key={index} label={item.label}>
            {item.type === "pieChart" ? (
              <PieChartReport
                label={item.label}
                person={item.person}
                totalPerson={item.totalPerson}
              />
            ) : (
              <TextReport
                label={item.label}
                person={item.person}
                totalPerson={item?.totalPerson}
              />
            )}
          </TodayBox>
        ))}
      </Grid>
    </Box>
  );
};

export default TodaySection;
