import React, { useState } from "react";
import "../styles/dashboard.css";
import Header from "../components/Header";
import PatientStats from "../components/PatientStats";
import { HomeFilled } from "@ant-design/icons";
import HospitalGrowthStats from "../components/HospitalGrowthStats";
import AdmitPatientList from "../components/AdmitPatientList";
import SideBar from "../components/SideBar";

function DashBoard() {
  const  [showSideBar,setShowSideBar] = useState(false)
  return (
    <>
      <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
      <main className="mx-2 md:mx-5 lg:mx-6">
        <div className="flex justify-between items-center my-5 sm:my-9">
          <h1 className="text-[20px] sm:text-[28px] font-semibold text-[#666666] tracking-wider">
            Dashboard
          </h1>
          <div className="bg-[#DCD0D04D] px-3 py-4 sm:p-5 flex items-center rounded-[50px]">
            <button className="text-[#888888] text-xs sm:text-base font-normal">
              <HomeFilled />
              <span className="ml-1">Home</span>
            </button>
            <span className="mx-2 text-[#888888]">&gt;</span>
            <button className="hdngColor text-xs sm:text-base font-normal">
              <span>Dashboard</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col mb-10 lg:mb-0 sm:flex-row flex-wrap items-center gap-y-4 md:gap-y-10 gap-x-4 min-w-full lg:min-w-[450px] max-w-full lg:max-w-[33%]">
              <PatientStats
                infoType="New Patients"
                value={125}
                progressColorObj={{
                  "0%": "#834D9B",
                  "38%": "#D04ED6",
                }}
              />
              <PatientStats
                infoType="OPD Patients"
                value={218}
                progressColorObj={{
                  "0%": "#FC5286",
                  "38%": "#FBAAA2",
                }}
              />
              <PatientStats
                infoType="Today's Operations"
                value={25}
                progressColorObj={{
                  "0%": "#56AB2F",
                  "38%": "#A8E063",
                }}
              />
              <PatientStats
                infoType="Visitors"
                value={"2, 479"}
                progressColorObj={{
                  "0%": "#F7971E",
                  "38%": "#FFD200",
                }}
              />
            </div>
            <div className="flex flex-col mt-4 md:mt-0 flex-1 gap-y-4 md:gap-y-9">
              <HospitalGrowthStats
                infoType="HOSPITAL SURVEY"
                titleStyle="font-medium tracking-wider text-sm sm:text-lg text-[#3A405B]"
                showGrowthInfo={false}
                showHigestAndLowestStatus={false}
              />
              <HospitalGrowthStats
                infoType="NEW PATIENT"
                titleStyle="font-black tracking-wider text-sm sm:text-lg hdngColor"
                showGrowthInfo={{
                  overall: "35.80%",
                  monthly: "45.20%",
                  day: "5.50%",
                }}
                showHigestAndLowestStatus={{
                  status: "high",
                  text: "25% High then last month",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-4 mt-9">
            <div className="w-full lg:w-6/12">
              <HospitalGrowthStats
                infoType="Heart Surgeries"
                titleStyle="font-black tracking-wider text-sm sm:text-lg hdngColor"
                showGrowthInfo={{
                  overall: "20.60%",
                  monthly: "65.30%",
                  day: "4.90%",
                }}
                showHigestAndLowestStatus={{
                  status: "low",
                  text: "30% Low then last month",
                }}
              />
            </div>
            <div className="w-full lg:w-6/12">
              <HospitalGrowthStats
                infoType="Medical Treatment"
                titleStyle="font-black tracking-wider text-sm sm:text-lg hdngColor"
                showGrowthInfo={{
                  overall: "38.40%",
                  monthly: "52.49%",
                  day: "4.70%",
                }}
                showHigestAndLowestStatus={{
                  status: "high",
                  text: "25% High then last month",
                }}
              />
            </div>
          </div>
          <AdmitPatientList />
        </div>
      </main>
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
    </>
  );
}

export default DashBoard;
