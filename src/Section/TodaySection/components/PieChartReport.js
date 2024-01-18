import React from "react";
import { Box, Typography } from "@mui/material";
import { Pie, PieChart, Cell } from "recharts";

const PieChartReport = ({ label, person, totalPerson }) => {
  const data = [{ value: person }, { value: totalPerson - person }];

  const COLORS = ["#5181ad", "#febb7d"];

  return (
    <Box width="auto" height="auto" position="relative">
      {label === "Attendance" ? (
        <Box
          textAlign="center"
          position="absolute"
          top="50%"
          left="50%"
          sx={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography fontSize="22px" fontWeight={700}>
            {((person / totalPerson) * 100).toFixed(2)}%
          </Typography>
          <Typography fontSize="14px" fontWeight={700}>
            12/14 Person
          </Typography>
        </Box>
      ) : (
        <Box
          textAlign="center"
          position="absolute"
          top="50%"
          left="50%"
          sx={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography fontSize="24px" fontWeight={700}>
            {person}/{totalPerson}
          </Typography>
        </Box>
      )}

      <PieChart width={180} height={180}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={55}
          fill="#8884d8"
          startAngle={90}
          endAngle={450}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </Box>
  );
};

export default PieChartReport;
