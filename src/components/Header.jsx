import React from "react";
import {
  BellOutlined,
  MailOutlined,
  MenuOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { images } from "../assets/images";
import { Avatar } from "antd";

function Header({ showSideBar, setShowSideBar }) {
  return (
    <header className="w-full h-auto absolute top-0 right-0">
      <div className="w-full flex items-center justify-between h-auto py-4 px-3 primaryBgColor">
        <div className="flex items-center gap-5">
          <button
            className="lg:mx-2"
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <MenuOutlined className="text-[26px] text-[#1a1818]" />
          </button>
          <input
            type="text"
            className="w-[82%] md:w-[250px] lg:w-72 py-[18px] px-[15px] bg-[#f4f4f4] text-lg font-normal text-[#b8b7b7] rounded-lg placeholder:text-[#b8b7b7] focus:outline-none"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex items-center md:gap-4 lg:gap-6">
            <button className="flex items-center gap-1 text-base md:text-lg">
              <img src={images.FLAG_ICON} className="w-6" />
              English
            </button>
            <button className="relative md:mr-3 md:ml-3">
              <BellOutlined className="text-[30px] text-[#1a1818]" />
              <span className="w-6 h-6 text-sm rounded-full bg-[#FF7400] text-white flex items-center justify-center absolute right-[-8px] top-[-8px]">
                6
              </span>
            </button>
            <button className="relative mt-1 md:ml-3 md:mr-3">
              <MailOutlined className="text-[30px] text-[#1a1818]" />
              <span className="w-6 h-6 text-sm rounded-full bg-[#6677EF] text-white flex items-center justify-center absolute right-[-10px] top-[-10px]">
                2
              </span>
            </button>
            <div className="flex items-center ml-1">
              <Avatar size={57} src={images.PROFILE_IMG} />
              <p className="ml-2 text-lg">Kiran</p>
            </div>
          </div>
          <button className="text-4xl md:ml-3 lg:ml-5">
            <MoreOutlined />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
