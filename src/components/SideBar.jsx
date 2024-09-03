import React from "react";
import { images } from "../assets/images";
import {
  CalendarOutlined,
  CloseOutlined,
  CopyOutlined,
  DesktopOutlined,
  DollarCircleOutlined,
  FileAddOutlined,
  GiftOutlined,
  InboxOutlined,
  MailOutlined,
  MehOutlined,
  ProfileOutlined,
  RightOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

function SideBar({ showSideBar, setShowSideBar }) {
  const tabs = [
    {
      title: "Dashboard",
      icon: <DesktopOutlined className="text-3xl" />,
      more: true,
      notification: false,
    },
    {
      title: "Email",
      icon: <MailOutlined className="text-2xl" />,
      more: true,
      notification: {
        bgColor: "#E91E63",
        value: "3",
      },
    },
    {
      title: "Calender",
      icon: <CalendarOutlined className="text-2xl" />,
      more: false,
      notification: false,
    },
    {
      title: "Appointment",
      icon: <ProfileOutlined className="text-3xl" />,
      more: true,
      notification: false,
    },
    {
      title: "Doctors",
      icon: <UserOutlined className="text-3xl" />,
      more: true,
      notification: false,
    },
    {
      title: "Other Staff",
      icon: <UsergroupAddOutlined className="text-3xl" />,
      more: true,
      notification: false,
    },
    {
      title: "Patients",
      icon: <MehOutlined className="text-3xl" />,
      more: true,
      notification: false,
    },
    {
      title: "Room Allotment",
      icon: <FileAddOutlined className="text-3xl" />,
      more: true,
      notification: false,
    },
    {
      title: "Payments",
      icon: <DollarCircleOutlined className="text-3xl" />,
      more: true,
      notification: false,
    },
    {
      title: "widget",
      icon: <GiftOutlined className="text-3xl" />,
      more: false,
      notification: false,
    },
    {
      title: "UI Elements",
      icon: <CopyOutlined className="text-3xl" />,
      more: true,
      notification: {
        bgColor: "#1EBDCC",
        value: "10",
      },
    },
    {
      title: "Material Elements",
      icon: <InboxOutlined className="text-3xl" />,
      more: true,
      notification: false,
    },
  ];
  return (
    <div
      className={`w-full h-full bg-[#00000073] fixed top-0 left-0 overflow-y-auto ${
        showSideBar ? "block" : "hidden"
      }`}
    >
      <div className="bg-white flex-1 flex flex-col w-full sm:w-[370px] sideBar_boxShdw">
        <div
          className="w-full min-h-[95px] max-[95px] bg-[#6673FC] flex items-center relative justify-center gap-2 text-white font-medium text-[27px]"
          style={{
            boxShadow: "0px 2px 5px 0px #00000029",
          }}
        >
          <img src={images.TELESCOPE_IMG} className="w-12 object-cover" />
          <h4 className="mr-10">Medical</h4>
          <button
            className="absolute top-7 right-4 text-white"
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <CloseOutlined />
          </button>
        </div>
        <div className="flex flex-col flex-1 w-full">
          <div className="h-auto mt-9 w-full flex flex-col justify-center items-center tracking-wide">
            <span
              className="inline-block w-[110px] h-[110px] overflow-hidden rounded-2xl"
              style={{
                boxShadow: "0px 5px 5px 0px #2C2C2C33",
              }}
            >
              <img src={images.PROFILE_IMG} className="object-cover" />
            </span>
            <h5 className="text-black font-bold text-lg mt-3 mb-1">
              Dr. Kiran Patel
            </h5>
            <h6 className="text-[#3a3a3a] font-normal text-sm">
              Administrator
            </h6>
          </div>
          <nav className="flex-1 p-3">
            <ul className="mt-8">
              {tabs.map((tab) => (
                <li className="flex items-center justify-between mx-2 my-9">
                  <span className="flex items-center gap-2 font-medium text-lg">
                    {tab.icon}
                    <p>{tab.title}</p>
                  </span>
                  <span className="flex items-center">
                    {tab.notification && (
                      <span
                        className="px-4 py-[1px] rounded-2xl text-white mr-5"
                        style={{
                          backgroundColor: tab.notification.bgColor,
                          boxShadow: " 0px 1px 3px 0px #0000001A",
                        }}
                      >
                        {tab.notification?.value}
                      </span>
                    )}
                    {tab.more && <RightOutlined />}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
