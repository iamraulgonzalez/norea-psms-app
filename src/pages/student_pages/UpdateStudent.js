import React, { useEffect } from "react";
import { Modal, Form, Input, Select, DatePicker, message } from "antd";
import { genderOptions, provinceOptions, statusOptions,studentstatus } from "../../helpers/Option";
import { BASE_URL } from "../../api/config";
import axios from "axios";
import moment from "moment";
function UpdateStudent({ isOpen, onClose, data, selectedData }) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (selectedData) {
      form.setFieldsValue({
        id: selectedData.student_id || "",
        student_name: selectedData.student_name || "",
        gender: selectedData.gender || undefined,
        dob: selectedData.dob ? moment(selectedData.dob) : undefined,
        family_status: selectedData.family_status || undefined,
        status: selectedData.status || undefined,
        pob_village: selectedData.pob_village || "",
        pob_commune: selectedData.pob_commune || "",
        pob_province: selectedData.pob_province || "",
        pob_district: selectedData.pob_district || "",
        current_village: selectedData.current_village || "",
        current_commune: selectedData.current_commune || "",
        current_province: selectedData.current_province || "",
        current_district: selectedData.current_district || "",
        father_name: selectedData.father_name || "",
        father_job: selectedData.father_job || "",
        father_phone: selectedData.father_phone || "",
        mother_name: selectedData.mother_name || "",
        mother_job: selectedData.mother_job || "",
        mother_phone: selectedData.mother_phone || "",
      });
    }
  }, [selectedData, form]);
  const handleUpdateStudent = async (id) => {
    try {
      const formValues = form.getFieldsValue();
  
      const studentId = formValues.student_id || selectedData.student_id || id;
  
      const body = {
        ...formValues,
        student_id: studentId,
        dob: formValues.dob ? formValues.dob.format('YYYY-MM-DD') : null,
      };
  
      const res = await axios.put(
        `${BASE_URL}students/updateStudent/${studentId}`,
        body,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
  
      if (res.status === 200 || res.status === 204) {
        form.resetFields();
        data();
        message.success("Student updated successfully!");
        onClose();
      } else {
        message.error("Something went wrong! Cannot update student.");
      }
    } catch (error) {
      console.error(error);
      message.error("An error occurred while updating the student.");
    }
  };
  
  return (
    <Modal
      title="Update Student"
      open={isOpen}
      onCancel={onClose}
      onOk={handleUpdateStudent}
      width={1000}
      style={{ top: 20, padding: "unset" }}
      okText="Save"
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
              format={"DD-MM-YYYY"}
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

          <Form.Item name="status" label="Student Status" className="w-1/2">
            <Select placeholder="Select family status" options={studentstatus} className="h-12" />
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
            <Select placeholder="Select province of birth" className="h-12" options={provinceOptions} />
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
            <Select placeholder="Select current province" className="h-12" options={provinceOptions} />
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

export default UpdateStudent;
