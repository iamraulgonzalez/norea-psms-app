import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { BASE_URL } from "../../api/config";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import CreateStudent from "./CreateStudent";
import UpdateStudent from "./UpdateStudent";
import { FaEye } from "react-icons/fa";
import { ViewStudentDetails } from "./ViewStudentDetails";
export const Student = () => {
  const [data, setData] = useState([]);

  const handleFetchData = () => {
    try {
      fetch(`${BASE_URL}students/getAllStudents`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleFetchData();
  }, []);

  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [isOpenView, setIsOpenView] = useState(false);
  const handleOpenCreate = () => {
    setIsOpenCreate(true);
  };

  const handleCloseCreate = () => {
    setIsOpenCreate(false);
  };

  const handleOpenUpdate = (record) => {
    setSelectedData(record);
    setIsOpenUpdate(true);
  };

  const handleCloseUpdate = () => {
    setIsOpenUpdate(false);
  };

  const handleOpenView = (record) => {
    setSelectedData(record);
    setIsOpenView(true);
  };

  const handleCloseView = () => {
    setIsOpenView(false);
  };

  const columns = [
    {
      title: "លេខសម្គាល់សិស្ស",
      dataIndex: "student_id",
      key: "student_id",
      align: "center",
    },
    {
      title: "ឈ្មោះសិស្ស",
      dataIndex: "student_name",
      key: "student_name",
      render: (text) => <div className="text-left">{text}</div>,
      align: "center",
    },
    {
      title: "ភេទ",
      dataIndex: "gender",
      key: "gender",
      render: (text) => (text === "male" ? "ប្រុស" : "ស្រី"),
      align: "center",
    },
    {
      title: "ថ្ងៃខែឆ្នាំកំណើត",
      dataIndex: "dob",
      key: "dob",
      align: "center",
    },
    {
      title: "ស្ថានភាពគ្រួសារ",
      dataIndex: "family_status",
      key: "family_status",
      render: (text) => (text === "poor" ? "ក្រីក្រ" : "ធម្មតា"),
      align: "center",
    },
    {
      title: "ផេ្សងៗ",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <div className="flex flex-row gap-2 items-center justify-center">
          <button className="bg-blue-600 p-2 rounded text-white">
            <FaEye onClick={() => handleOpenView(record)} />
          </button>
          <button
            onClick={() => {
              handleOpenUpdate(record);
              console.log(record.student_id);
            }}
            className="bg-green-600 p-2 rounded text-white"
          >
            <FaRegPenToSquare />
          </button>
          <button className="bg-red-600 p-2 rounded text-white">
            <MdDeleteForever />
          </button>
        </div>
      ),
      align: "center",
    },
  ];

  return (
    <div className="shadow-sm px-6 py-6 rounded-sm bg-white">
      <div className="flex flex-row justify-between py-4">
        <h1 className="font-bold text-2xl font-kantumruy">តារាងសិស្ស</h1>
        <span>
          <button
            onClick={handleOpenCreate}
            className="bg-blue-600 py-2 px-4 rounded text-white font-kantumruy"
          >
            បង្កើតសិស្សថ្មី
          </button>
        </span>
      </div>
      <Table className="w-full" columns={columns} dataSource={data} />
      <CreateStudent
        isOpen={isOpenCreate}
        onClose={handleCloseCreate}
        data={handleFetchData}
      />
      <UpdateStudent
        isOpen={isOpenUpdate}
        onClose={handleCloseUpdate}
        data={handleFetchData}
        selectedData={selectedData}
      />
      <ViewStudentDetails
        isOpen={isOpenView}
        onClose={handleCloseView}
        data={selectedData}
      />
    </div>
  );
};
