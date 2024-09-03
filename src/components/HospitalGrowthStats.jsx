import React from "react";
import "../styles/dashboard.css";
import {
  CaretDownFilled,
  CaretUpFilled,
  CloseOutlined,
  DownOutlined,
} from "@ant-design/icons";
import RenderHospitalGrowthCharts from "./RenderHospitalGrowthCharts";

function HospitalGrowthStats({
  infoType,
  showGrowthInfo,
  showHigestAndLowestStatus,
  titleStyle,
}) {
  return (
    <div className="bg-white w-full rounded-xl h-fit chart_boxShdw">
      <div
        className={`flex justify-between w-full items-center ${
          !showHigestAndLowestStatus
            ? "border-b border-dashed border-[#00000033] p-5"
            : "px-4 sm:px-5 pt-4 sm:pt-10 pb-5"
        }`}
      >
        <h4 className={`${titleStyle || ""}`}>{infoType}</h4>
        {showHigestAndLowestStatus ? (
          <p
            className={`text-xs sm:text-sm whitespace-nowrap font-extralight ${
              showHigestAndLowestStatus &&
              showHigestAndLowestStatus.status == "high"
                ? "text-[#198754]"
                : "text-[#DC3545]"
            }`}
          >
            {showHigestAndLowestStatus?.status === "high" ? (
              <CaretUpFilled />
            ) : (
              <CaretDownFilled />
            )}
            {showHigestAndLowestStatus?.text}
          </p>
        ) : (
          <span className="text-xl flex items-center gap-3 text-[#97A0B3]">
            <button>
              <DownOutlined />
            </button>
            <button>
              <CloseOutlined />
            </button>
          </span>
        )}
      </div>
      {showGrowthInfo && (
        <div className="flex items-center gap-7 ml-5 my-2">
          <span className="flex flex-col items-center">
            <h6 className="font-extralight text-[#616161de] text-sm sm:text-base mb-2">
              Overall Growth
            </h6>
            <p className="font-black hdngColor text-lg">
              {showGrowthInfo?.overall || ""}
            </p>
          </span>
          <span className="flex flex-col items-center">
            <h6 className="font-extralight text-[#616161de] text-sm sm:text-base mb-2">
              Monthly
            </h6>
            <p className="font-black hdngColor text-lg">
              {showGrowthInfo?.monthly || ""}
            </p>
          </span>
          <span className="flex flex-col items-center">
            <h6 className="font-extralight text-[#616161de] text-sm sm:text-base mb-2">
              Day
            </h6>
            <p className="font-black hdngColor text-base sm:text-lg">
              {showGrowthInfo?.day || ""}
            </p>
          </span>
        </div>
      )}
      <div className="pt-8 pb-8 pr-3 md:pl-10 md:pb-10 md:pr-10">
        <RenderHospitalGrowthCharts infoType={infoType} />
      </div>
    </div>
  );
}

export default HospitalGrowthStats;
