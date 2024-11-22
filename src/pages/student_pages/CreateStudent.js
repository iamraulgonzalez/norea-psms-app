import React from "react";
import { Modal, Form, Input, Select, DatePicker, message } from "antd";
import { genderOptions, statusOptions } from "../../helpers/Option";
import { BASE_URL } from "../../api/config";
import axios from "axios";

function CreateStudent({ isOpen, onClose, data }) {
  const [form] = Form.useForm();

  const handleCreateStudent = async () => {
    try {
      const body = form.getFieldsValue();
      const res = await axios.post(`${BASE_URL}students/addStudent`, body, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (res.status === 201) {
        form.resetFields();
        data();
        message.success("Student created successfully!");
        onClose();
      } else {
        message.error("Something went wrong! cannot create student.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      title="Create Student"
      open={isOpen}
      onCancel={onClose}
      onOk={handleCreateStudent}
      width={1000}
      style={{ top: 20, padding: "unset" }}
      okText="Create"
    >
      <Form layout="vertical" form={form} className="py-4">
        <div className="flex items-center my-1">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-600 font-semibold">
            Student Information
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex flex-row gap-4 justify-between">
          <Form.Item
            name="student_name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input student name!",
              },
            ]}
            className="w-1/2"
          >
            <Input className="h-12" placeholder="Enter student name" />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: "Please select gender!",
              },
            ]}
            className="w-1/2"
          >
            <Select
              className="h-12"
              placeholder="Select gender"
              options={genderOptions}
            />
          </Form.Item>

          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[
              {
                required: true,
                message: "Please select date of birth!",
              },
            ]}
            className="w-1/2"
          >
            <DatePicker
              className="h-12"
              placeholder="Select date of birth"
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            name="family_status"
            label="Family Status"
            className="w-1/2"
          >
            <Select
              placeholder="Select family status"
              options={statusOptions}
              className="h-12"
            />
          </Form.Item>
        </div>
        <div className="flex items-center my-1">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-600 font-semibold">
            Place of Birth Address
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex flex-row gap-4 justify-between">
          <Form.Item
            name="pob_village"
            label="Place of Birth - Village"
            className="w-1/2"
          >
            <Input placeholder="Enter village of birth" className="h-12" />
          </Form.Item>

          <Form.Item
            name="pob_commune"
            label="Place of Birth - Commune"
            className="w-1/2"
          >
            <Input placeholder="Enter commune of birth" className="h-12" />
          </Form.Item>

          <Form.Item
            name="pob_district"
            label="Place of Birth - District"
            className="w-1/2"
          >
            <Input placeholder="Enter district of birth" className="h-12" />
          </Form.Item>

          <Form.Item
            name="pob_province"
            label="Place of Birth - Province"
            className="w-1/2"
          >
            <Input placeholder="Enter province of birth" className="h-12" />
          </Form.Item>
        </div>
        <div className="flex items-center my-1">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-600 font-semibold">
            Current Address
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex flex-row gap-4 justify-between">
          <Form.Item
            name="current_village"
            label="Current Village"
            className="w-1/2"
          >
            <Input placeholder="Enter current village" className="h-12" />
          </Form.Item>

          <Form.Item
            name="current_commune"
            label="Current Commune"
            className="w-1/2"
          >
            <Input placeholder="Enter current commune" className="h-12" />
          </Form.Item>

          <Form.Item
            name="current_district"
            label="Current District"
            className="w-1/2"
          >
            <Input placeholder="Enter current district" className="h-12" />
          </Form.Item>

          <Form.Item
            name="current_province"
            label="Current Province"
            className="w-1/2"
          >
            <Input placeholder="Enter current province" className="h-12" />
          </Form.Item>
        </div>

        <div className="flex items-center my-1">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-600 font-semibold">
            Parent's Information
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex flex-row gap-4 justify-between">
          <Form.Item name="father_name" label="Father's Name" className="w-1/2">
            <Input placeholder="Enter father's name" className="h-12" />
          </Form.Item>

          <Form.Item name="father_job" label="Father's Job" className="w-1/2">
            <Input placeholder="Enter father's job" className="h-12" />
          </Form.Item>

          <Form.Item
            name="father_phone"
            label="Father's Phone"
            className="w-1/2"
          >
            <Input placeholder="Enter father's phone number" className="h-12" />
          </Form.Item>
        </div>
        <div className="flex flex-row gap-4 justify-between">
          <Form.Item name="mother_name" label="Mother's Name" className="w-1/2">
            <Input placeholder="Enter mother's name" className="h-12" />
          </Form.Item>

          <Form.Item name="mother_job" label="Mother's Job" className="w-1/2">
            <Input placeholder="Enter mother's job" className="h-12" />
          </Form.Item>

          <Form.Item
            name="mother_phone"
            label="Mother's Phone"
            className="w-1/2"
          >
            <Input placeholder="Enter mother's phone number" className="h-12" />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
}

export default CreateStudent;
