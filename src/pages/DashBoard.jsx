import React from "react";
import Header from "../components/Header";
import PatientStats from "../components/PatientStats";
import { HomeFilled } from "@ant-design/icons";
import HospitalSurvey from "../components/HospitalSurvey";

function DashBoard() {
  return (
    <>
      <Header />
      <main className="mx-6">
        <div className="flex justify-between items-center my-9">
          <h1 className="text-[28px] font-semibold text-[#666666] tracking-wider">
            Dashboard
          </h1>
          <div className="bg-[#DCD0D04D] p-5 flex items-center rounded-[50px]">
            <button className="text-[#888888] text-base font-normal">
              <HomeFilled />
              <span className="ml-1">Home</span>
            </button>
            <span className="mx-2 text-[#888888]">&gt;</span>
            <button className="text-[#000000DE] text-base font-normal">
              <span>Dashboard</span>
            </button>
          </div>
        </div>
        <div className="flex justify-between">
        <div className="flex flex-wrap justify-between items-center gap-y-10 gap-x-4 w-[450px]">
          <PatientStats
            text="New Patients"
            value={125}
            progress_color_obj={{
              "0%": "#834D9B",
              "38%": "#D04ED6",
            }}
            chartType="pie"
          />
          <PatientStats
            text="OPD Patients"
            value={218}
            progress_color_obj={{
              "0%": "#FC5286",
              "38%": "#FBAAA2",
            }}
            chartType="bar"
          />
          <PatientStats
            text="Today's Operations"
            value={25}
            progress_color_obj={{
              "0%": "#56AB2F",
              "38%": "#A8E063",
            }}
            chartType="line"
          />
          <PatientStats
            text="Visitors"
            value={"2, 479"}
            progress_color_obj={{
              "0%": "#F7971E",
              "38%": "#FFD200",
            }}
            chartType="area"
          />
        </div>
        <HospitalSurvey/>
        </div>
      </main>
    </>
  );
}

export default DashBoard;
