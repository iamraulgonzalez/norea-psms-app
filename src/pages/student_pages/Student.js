import React, { useState, useEffect } from "react";
import { Button, Input, Table } from "antd";
import { BASE_URL } from "../../api/config";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import CreateStudent from "./CreateStudent";
import UpdateStudent from "./UpdateStudent";
import { FaEye } from "react-icons/fa";
import { ViewStudentDetails } from "./ViewStudentDetails";
import moment from "moment";
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
      render: (text) => <p className="font-Poppins">NR-{text}</p>,
      align: "center",
    },
    {
      title: "ឈ្មោះសិស្ស",
      dataIndex: "student_name",
      key: "student_name",
      render: (text) => <div className="text-left font-kantumruy">{text}</div>,
      align: "center",
    },
    {
      title: "ភេទ", 
      dataIndex: "gender",
      key: "gender",
      render: (text) => <p className="text-left font-kantumruy">{text === "male" ? "ប្រុស" : "ស្រី"}</p>,
      align: "center",
    },
    {
      title: "ថ្ងៃខែឆ្នាំកំណើត",
      dataIndex: "dob",
      key: "dob",
      render: (text) =>{
        return <p className="text-left font-kantumruy">{moment(text).format("DD-MMM-YYYY")}</p>
      },
      align: "center",
    },
    {
      title: "បណ្ណ័សមធម៌",
      dataIndex: "family_status",
      key: "family_status",
      render: (text) => {
        if(text === "level1"){
          return <p className="text-left font-kantumruy">កម្រិត១</p>
        }else if(text === "level2"){
          return <p className="text-left font-kantumruy">កម្រិត២</p>
        }else{
          return <p className="text-left font-kantumruy">គ្មាន</p>
        }
      },
      align: "center",
    },
  {
    title: "ស្ថានភាពសិស្ស",
    dataIndex: "status",
    key: "status",
    render: (text) => {
      if(text === "active"){
        return <p className="text-left font-kantumruy">កំពុងសិក្សា</p>
      }else if(text === "graduate"){
        return <p className="text-left font-kantumruy">បញ្ចប់ការសិក្សា</p>
      }
      else if (text === "suspend"){
        return <p className="text-left font-kantumruy">ព្យួរការសិក្សា</p>
      }else
      {
        return <p className="text-left font-kantumruy">ឈប់រៀន</p>
      }
    },
    align: "center",
  },
    {
      title: "ជម្រើស",
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
      <div className="flex flex-row justify-between py-4 w-full">
        <h1 className="font-bold text-2xl font-kantumruy">តារាងសិស្ស</h1>
        <span className="flex flex-row justify-between gap-4">
          <Input.Search placeholder="Search..." size="large" className="w-[400px]"/>
          <Button
            onClick={handleOpenCreate}
            className="bg-blue-600 py-5 rounde-lg text-white font-kantumruy"
          >
            ចុះឈ្មោះសិស្សថ្មី
          </Button>
        </span>
      </div>
      <hr className="py-4 -mb-4 border-t-2 border-gray-300" />
      <Table className="w-full" onHeaderRow={() => ({className: "font-kantumruy"})} columns={columns} dataSource={data} bordered  pagination={{ pageSize: 5 }} style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
        }} />
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
