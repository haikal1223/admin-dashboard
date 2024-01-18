import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  Label,
} from "recharts";
import attendaceDailyData from "../../../../../static/file2.json";
import { Box } from "@mui/material";

const AttendanceDailyChart = () => {
  const attendanceData = attendaceDailyData["Attendance Daily"];
  const dateList = Object.keys(attendanceData["Attend"]);

  const chartData = dateList.map((date) => {
    const total =
      attendanceData["Attend"][date] +
      attendanceData["Unattend"][date] +
      attendanceData["Non Schedule"][date];

    return {
      date,
      Attend: (attendanceData["Attend"][date] / total) * 100 || 0,
      Unattend: (attendanceData["Unattend"][date] / total) * 100 || 0,
      "Non Schedule": (attendanceData["Non Schedule"][date] / total) * 100 || 0,
      "Accumulation Attend": attendanceData["Accumulation Attend"][date] || 0,
      "Accumulation Un-attend":
        attendanceData["Accumulation Un-attend"][date] || 0,
      "Accumulation Non Schedule":
        attendanceData["Accumulation Non Schedule"][date] || 0,
      total,
    };
  });

  return (
    <Box>
      <ResponsiveContainer width="100%" height={314}>
        <ComposedChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
        >
          <XAxis
            dataKey="date"
            ticks={dateList}
            interval={0}
            angle={-50}
            textAnchor="end"
            mirror={false}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            ticks={[0, 20, 40, 60, 80, 100]}
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
            ticks={[0, 25, 50, 75]}
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
              name.includes("Accumulation") ? value : `${value.toFixed(2)}%`
            }
          />
          <Legend wrapperStyle={{ bottom: 0 }} />
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
            dataKey="Accumulation Attend"
            stroke="#87b4a9"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="Accumulation Un-attend"
            stroke="#82853f"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="Accumulation Non Schedule"
            stroke="#3b737b"
          />
        </ComposedChart>
      </ResponsiveContainer>
      {/* <CustomLegend /> */}
    </Box>
  );
};

export default AttendanceDailyChart;
