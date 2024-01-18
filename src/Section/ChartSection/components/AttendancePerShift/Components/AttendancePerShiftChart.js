import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  Label,
} from "recharts";
import attendancePerShiftData from "../../../../../static/file2.json";
import { Box } from "@mui/material";

const AttendancePerShiftChart = () => {
  const attendanceData = attendancePerShiftData["Attendance Per Shift"];
  const shiftList = Object.keys(attendanceData["Attend"]);

  const chartData = shiftList.map((shift) => {
    const total =
      attendanceData["Attend"][shift] +
      attendanceData["Un-attend"][shift] +
      attendanceData["Late Check-in"][shift] +
      attendanceData["Non Schedule"][shift];

    return {
      shift,
      Attend: (attendanceData["Attend"][shift] / total) * 100 || 0,
      Unattend: (attendanceData["Un-attend"][shift] / total) * 100 || 0,
      "Late Check In":
        (attendanceData["Late Check-in"][shift] / total) * 100 || 0,
      "Non Schedule":
        (attendanceData["Non Schedule"][shift] / total) * 100 || 0,
      "Total Attend": attendanceData["Attend"][shift] || 0,
      "Total Un-attend": attendanceData["Un-attend"][shift] || 0,
      "Total Late Check In": attendanceData["Late Check-in"][shift] || 0,
      "Total Non Schedule": attendanceData["Non Schedule"][shift] || 0,
      total,
    };
  });

  return (
    <Box>
      <ResponsiveContainer width="100%" height={333}>
        <ComposedChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
        >
          <CartesianGrid horizontal={true} vertical={false} />
          <XAxis
            dataKey="shift"
            ticks={shiftList}
            interval={0}
            textAnchor="middle"
            tick={{ width: 100 }}
            tickLine={false}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            ticks={[0, 20, 40, 60, 80, 100]}
            domain={[0, 100]}
            axisLine={false}
            tickLine={false}
          >
            <Label
              value="Percentage"
              position="insideLeft"
              angle={-90}
              style={{ textAnchor: "middle" }}
            />
          </YAxis>
          <YAxis
            yAxisId="right"
            orientation="right"
            ticks={[0, 8, 16, 24]}
            domain={[0, 24]}
            axisLine={false}
            tickLine={false}
          >
            <Label
              value="Total"
              position="insideRight"
              angle={90}
              style={{ textAnchor: "middle" }}
            />
          </YAxis>
          <Tooltip
            formatter={(value, name) =>
              name.includes("Total") ? value : `${value.toFixed(2)}%`
            }
          />
          <Legend wrapperStyle={{ bottom: 20 }} align="left" />
          <Bar yAxisId="left" dataKey="Attend" stackId="stack" fill="#5181ad">
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#5181ad" />
            ))}
          </Bar>
          <Bar yAxisId="left" dataKey="Unattend" stackId="stack" fill="#febb7d">
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#febb7d" />
            ))}
          </Bar>
          <Bar
            yAxisId="left"
            dataKey="Late Check In"
            stackId="stack"
            fill="#fa2a36"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#fa2a36" />
            ))}
          </Bar>
          <Bar
            yAxisId="left"
            dataKey="Non Schedule"
            stackId="stack"
            fill="#5c5c61"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#5c5c61" />
            ))}
          </Bar>

          {/* Line chart */}
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="Total Attend"
            stroke="#5181ad"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="Total Un-attend"
            stroke="#febb7d"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="Total Late Check In"
            stroke="#fa2a36 "
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="Total Non Schedule"
            stroke="#5c5c61"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default AttendancePerShiftChart;
