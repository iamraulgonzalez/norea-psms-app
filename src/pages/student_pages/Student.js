import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { BASE_URL } from "../../api/config";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
export const Student = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}students/getAllStudents`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "student_id",
      key: "student_id",
    },
    {
      title: "Name",
      dataIndex: "student_name",
      key: "student_name",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Date of birth",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "Place of birth",
      dataIndex: "pob_village",
      key: "pob_village",
      render: (text, record) => (
        <div className="flex flex-col text-center justify-center items-center">
          <span className="flex flex-row">
            {record.pob_village}, {record.pob_commune}
          </span>
          <span className="flex flex-row">
            {record.pob_district}, {record.pob_province}
          </span>
        </div>
      ),
    },
    {
      title: "Current address",
      dataIndex: "pob_commune",
      key: "pob_commune",
      render: (text, record) => (
        <div className="flex flex-col text-center justify-center items-center">
          <span className="flex flex-row">
            {record.current_village}, {record.current_commune}
          </span>
          <span className="flex flex-row">
            {record.current_district}, {record.current_province}
          </span>
        </div>
      ),
      align: "center",
    },
    {
      title: "Father",
      dataIndex: "father_name",
      key: "father_name",
      render: (text, record) => (
        <div className="flex flex-col text-center justify-center items-center">
          <span className="flex flex-row">{record.father_name}</span>
          <span className="flex flex-row">
            {record.father_phone}, {record.father_job}
          </span>
        </div>
      ),
    },
    {
      title: "Mother",
      dataIndex: "mother_name",
      key: "monther_name",
      render: (text, record) => (
        <div className="flex flex-col text-left justify-center items-center">
          <span className="flex flex-row">{record.monther_name}</span>
          <span className="flex flex-row">
            {record.monther_phone}, {record.monther_job}
          </span>
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <div className="flex flex-row gap-2">
          <button className="bg-green-600 p-2 rounded text-white">
            <FaRegPenToSquare />
          </button>
          <button className="bg-red-600 p-2 rounded text-white">
            <MdDeleteForever />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="shadow-md p-4 rounded-md bg-white">
      <h1 className="font-bold text-2xl p-2">List of students</h1>
      <Table className="w-full p-2" columns={columns} dataSource={data} />
    </div>
  );
};
