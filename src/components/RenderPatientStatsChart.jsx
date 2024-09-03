import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  ResponsiveContainer,
  Area,
} from "recharts";

function RenderPatientStatsChart({ infoType }) {
  const pie_chart_data = {
    data: [{ value: 400 }, { value: 500 }, { value: 300 }],
    colors: ["#F1F2F7", "#6164C1", "#13DAFE"],
  };

  const bar_chart_data = [
    {
      uv: 3000,
      pv: 2500,
    },
    {
      uv: 4300,
      pv: 500,
    },
    {
      uv: 600,
      pv: 5000,
    },
    {
      uv: 2780,
      pv: 600,
    },
    {
      uv: 3000,
      pv: 4800,
    },
    {
      uv: 3090,
      pv: 3800,
    },
    {
      uv: 500,
      pv: 2000,
    },
    {
      uv: 3490,
      pv: 4300,
    },
  ];

  const line_chart_data = [
    {
      uv: 1000,
    },
    {
      uv: 4500,
    },
    {
      uv: 1500,
    },
    {
      uv: 5090,
    },
    {
      uv: 1000,
    },
    {
      uv: 1500,
    },
    {
      uv: 4300,
    },
    {
      uv: 1600,
    },
    {
      uv: 6080,
    },
    {
      uv: 3000,
    },
    {
      uv: 3090,
    },
  ];

  const area_chart_data = [
    {
      uv: 1000,
    },
    {
      uv: 5000,
    },
    {
      uv: 2000,
    },
    {
      uv: 4500,
    },
    {
      uv: 1500,
    },
    {
      uv: 5090,
    },
    {
      uv: 500,
    },
    {
      uv: 4000,
    },
    {
      uv: 1500,
    },
    {
      uv: 4300,
    },
    {
      uv: 600,
    },
    {
      uv: 6080,
    },
    {
      uv: 3000,
    },
    {
      uv: 3090,
    },
  ];

  return (
    <>
      {infoType.trim().toLowerCase() === "new patients".toLowerCase() ? (
        <PieChart width={100} height={100}>
          <Pie
            data={pie_chart_data.data}
            labelLine={false}
            fill="#8884d8"
            dataKey="value"
          >
            {pie_chart_data.data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  pie_chart_data.colors[index % pie_chart_data.colors.length]
                }
              />
            ))}
          </Pie>
        </PieChart>
      ) : infoType.trim().toLowerCase() === "opd patients".toLowerCase() ? (
        <BarChart
          width={150}
          height={80}
          margin={{
            bottom: 10,
          }}
          data={bar_chart_data}
        >
          <Bar dataKey="pv" fill="#13DAFE" />
          <Bar dataKey="uv" fill="#13DAFE" />
        </BarChart>
      ) : infoType.trim().toLowerCase() ===
        "today's operations".toLowerCase() ? (
        <LineChart
          width={150}
          height={100}
          data={line_chart_data}
          margin={{
            bottom: 10,
          }}
        >
          <Line type="monotone" dataKey="uv" stroke="#696CC4" fill="#FF8800" />
        </LineChart>
      ) : infoType.trim().toLowerCase() === "visitors".toLowerCase() ? (
        <ResponsiveContainer width={150} height={100}>
          <AreaChart
            height={80}
            data={area_chart_data}
            margin={{
              bottom: 20,
            }}
          >
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#7986D1"
              strokeWidth={2}
              fill="#A0B5E5"
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : null}
    </>
  );
}

export default RenderPatientStatsChart;
