import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";
import React from "react";

function AdmitPatientList() {
  const data = [
    {
      key: "1",
      name: "Jens Brincker",
      assignedDoctor: "Dr.Kenny Josh",
      dateOfAdmit: "27/05/2016",
      disease: "Influenza",
      roomNo: "101",
    },
    {
      key: "2",
      name: "Mark Hay",
      assignedDoctor: "Dr. Mark",
      dateOfAdmit: "26/05/2017",
      disease: "Cholera",
      roomNo: "105",
    },
    {
      key: "3",
      name: "Anthony Davie",
      assignedDoctor: "Dr.Cinnabar",
      dateOfAdmit: "21/05/2016",
      disease: "Amoebiasis",
      roomNo: "106",
    },
    {
      key: "4",
      name: "David Perry",
      assignedDoctor: "Dr.Felix",
      dateOfAdmit: "20/04/2016",
      disease: "Jaundice",
      roomNo: "105",
    },
    {
      key: "5",
      name: "Anthony Davie",
      assignedDoctor: "Dr.Beryl",
      dateOfAdmit: "24/05/2016",
      disease: "Leptospirosis",
      roomNo: "102",
    },
    {
      key: "6",
      name: "Alan Gilchrist",
      assignedDoctor: "Dr.Joshep",
      dateOfAdmit: "22/05/2016",
      disease: "Hepatitis",
      roomNo: "103",
    },
    {
      key: "7",
      name: "Mark Hay",
      assignedDoctor: "Dr.Jayesh",
      dateOfAdmit: "18/06/2016",
      disease: "Typhoid",
      roomNo: "107",
    },
    {
      key: "8",
      name: "Sue Woodger",
      assignedDoctor: "Dr.Sharma",
      dateOfAdmit: "17/05/2016",
      disease: "Malaria",
      roomNo: "108",
    },
  ];

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Assigned Doctor",
      dataIndex: "assignedDoctor",
      key: "assignedDoctor",
    },
    {
      title: "Date of Admit",
      dataIndex: "dateOfAdmit",
      key: "dateOfAdmit",
    },
    {
      title: "Diseases",
      dataIndex: "disease",
      key: "disease",
    },
    {
      title: "Room No",
      dataIndex: "roomNo",
      key: "roomNo",
    },
    {
      title: "Edit",
      dataIndex: "edit",
      key: "edit",
    },
  ];

  const colors = [
    "linear-gradient(45deg, #2ED8B6 0%, #59E0C5 100%)",
    "linear-gradient(45deg, #FFB64D 0%, #FFCB80 100%)",
    "linear-gradient(45deg, #2ED8B6 0%, #59E0C5 100%)",
    "linear-gradient(45deg, #FF5370 0%, #FF869A 100%)",
  ];
  return (
    <div className="w-full mt-9 bg-white px-3 pt-3 pb-8 rounded-xl mb-5 chart_boxShdw">
      <h5 className="text-[#3A405B] font-bold text-xl mb-5 mx-2 mt-2">
        ADMIT PATIENT LIST
      </h5>
      <Table
        scroll={{ x: "max-content" }}
        rowHoverable={false}
        pagination={false}
        dataSource={data.map((patient, i) => ({
          key: patient.key,
          no: <p className="text-[#212529] font-normal text-base">{i + 1}</p>,
          name: (
            <p className="text-[#212529] font-normal text-base">
              {patient.name}
            </p>
          ),
          assignedDoctor: (
            <p className="text-[#212529] font-normal text-base">
              {patient.assignedDoctor}
            </p>
          ),
          dateOfAdmit: (
            <p className="text-[#212529] font-normal text-base">
              {patient.dateOfAdmit}
            </p>
          ),
          disease: (
            <span
              className="text-white font-semibold text-sm py-2 px-3 rounded"
              style={{
                background: colors[i % colors.length],
                boxShadow: "0px 1px 3px 0px #0000001A",
              }}
            >
              {patient.disease}
            </span>
          ),
          roomNo: (
            <p className="text-[#212529] font-normal text-base">
              {patient.roomNo}
            </p>
          ),
          edit: (
            <div className="flex items-center gap-3">
              <button className="bg-[#00FF0A33] text-[#4CAF50] px-3 py-2 rounded-md">
                <EditOutlined />
              </button>
              <button className="bg-[#FF440033] text-red-500 px-3 py-2 rounded-md">
                <DeleteOutlined />
              </button>
            </div>
          ),
        }))}
        columns={columns}
      />
    </div>
  );
}

export default AdmitPatientList;
