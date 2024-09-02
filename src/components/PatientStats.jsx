import React from "react";
import "../styles/dashboard.css";
import { Progress } from "antd";
import RenderPatientStatsChart from "./RenderPatientStatsChart";

function PatientStats({ text, value, progress_color_obj, chartType }) {
  return (
    <div className="bg-white flex flex-col chart_boxShdw w-[400px] h-[200px] rounded-xl p-3">
      <div className="p-3 flex flex-col flex-1">
        <h6 className="text-[#000000DE] font-semibold tracking-wide text-xl">
          {text}
        </h6>
        <div className="flex items-center flex-1 justify-between">
          <h5 className="text-[#28A745] font-semibold text-[33px]">{value}</h5>
          <RenderPatientStatsChart chartType={chartType} />
        </div>
      </div>
      <Progress
        percent={45}
        strokeColor={progress_color_obj}
        status="active"
        showInfo={false}
        size={{ height: 12 }}
      />
    </div>
  );
}

export default PatientStats;
