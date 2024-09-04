import React from "react";
import "../styles/dashboard.css";
import { Progress } from "antd";
import RenderPatientStatsChart from "./RenderPatientStatsChart";

function PatientStats({ infoType, value, progressColorObj }) {
  return (
    <div className="bg-white flex flex-col chart_boxShdw w-full lg:w-[400px] h-[200px] md:h-[240px] lg:h-[200px] rounded-xl p-3">
      <div className="p-3 flex flex-col flex-1">
        <h6 className="hdngColor font-semibold tracking-wide text-xl md:text-2xl lg:text-xl">
          {infoType}
        </h6>
        <div className="flex items-center flex-1 justify-between">
          <h5 className="text-[#28A745] font-semibold text-[33px] md:text-[40px] lg:text-[33px]">
            {value}
          </h5>
          <RenderPatientStatsChart infoType={infoType} />
        </div>
      </div>
      <Progress
        percent={45}
        strokeColor={progressColorObj}
        status="active"
        showInfo={false}
        size={{ height: 12 }}
      />
    </div>
  );
}

export default PatientStats;
