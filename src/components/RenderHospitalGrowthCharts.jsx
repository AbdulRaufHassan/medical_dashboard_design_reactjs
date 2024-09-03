import { Tooltip } from "antd";
import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

function RenderHospitalGrowthCharts({ infoType }) {
  const data = [
    {
      name: "Jan",
      uv: 2000,
      pv: 2400,
      amt: 1000,
    },
    {
      name: "Feb",
      uv: 6000,
      pv: 1398,
      amt: 4000,
    },
    {
      name: "March",
      uv: 1500,
      pv: 8800,
      amt: 3500,
    },
    {
      name: "April",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 7890,
      pv: 4800,
      amt: 2600,
    },
    {
      name: "June",
      uv: 2390,
      pv: 7800,
      amt: 5500,
    },
    {
      name: "July",
      uv: 5490,
      pv: 4300,
      amt: 1000,
    },
  ];
  return (
    <>
      {infoType.trim().toLowerCase() === "hospital survey".toLowerCase() ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="0 0" />
            <XAxis dataKey="name" />
            <YAxis
              tickFormatter={(tick) => {
                const formattedTick = Number(tick) / 250;
                return formattedTick.toFixed(0);
              }}
            />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#82ca9d"
              strokeWidth={3}
              strokeDasharray="6 7 6 7"
            />
          </LineChart>
        </ResponsiveContainer>
      ) : infoType.trim().toLowerCase() === "new patient".toLowerCase() ? (
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="0 0" />
            <XAxis dataKey="name" />
            <YAxis
              tickFormatter={(tick) => {
                const formattedTick = Number(tick) / 250;
                return formattedTick.toFixed(0);
              }}
            />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#999B9C"
              strokeWidth={6}
              fill="#DCDCDD"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#4CC2B0"
              strokeWidth={6}
              fill="#CBEDE8"
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : infoType.trim().toLowerCase() === "heart surgeries".toLowerCase() ? (
        <div className="w-full h-[250px] md:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width="100%" height="100%" data={data} stackOffset="sign">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis
                tickFormatter={(tick) => {
                  const formattedTick = Number(tick) / 200;
                  return formattedTick.toFixed(0);
                }}
              />
              <Bar dataKey="pv" fill="#008FFB" stackId="stack" />
              <Bar dataKey="uv" fill="#00E396" stackId="stack" />
              <Bar dataKey="amt" fill="#FEB019" stackId="stack" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : infoType.trim().toLowerCase() ===
        "medical treatment".toLowerCase() ? (
        <div className="w-full h-[250px] md:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="0 0" />
              <XAxis dataKey="name" />
              <YAxis
                tickFormatter={(tick) => {
                  const formattedTick = Number(tick) / 250;
                  return formattedTick.toFixed(0);
                }}
              />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#FEBC3C"
                strokeWidth={5}
                strokeDasharray="6 7 6 7"
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#26E7A6"
                strokeWidth={3}
                strokeDasharray="6 7 6 7"
              />
              <Line
                type="monotone"
                dataKey="amt"
                stroke="#26A0FC"
                strokeWidth={5}
                strokeDasharray="0 0"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : null}
    </>
  );
}

export default RenderHospitalGrowthCharts;
