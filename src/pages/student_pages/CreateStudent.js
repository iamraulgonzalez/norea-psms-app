import React, { useState } from "react";
import { Modal, Form, Input, Select, DatePicker, message } from "antd";
import { genderOptions, provinceOptions, statusOptions } from "../../helpers/Option";
import { BASE_URL } from "../../api/config";
import axios from "axios";

function CreateStudent({ isOpen, onClose, data }) {
  const [form] = Form.useForm();

 
  const [districtOptions, setDistrictOptions] = useState([]);
  const [communeOptions, setCommuneOptions] = useState([]);
  const [villageOptions, setVillageOptions] = useState([]);

  const [currentDistrictOptions, setCurrentDistrictOptions] = useState([]);
  const [currentCommuneOptions, setCurrentCommuneOptions] = useState([]);
  const [currentVillageOptions, setCurrentVillageOptions] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedCommune, setSelectedCommune] = useState(null);

  const [selectedCurrentProvince, setSelectedCurrentProvince] = useState(null);
  const [selectedCurrentDistrict, setSelectedCurrentDistrict] = useState(null);
  const [selectedCurrentCommune, setSelectedCurrentCommune] = useState(null);

  // Handle province change for Place of Birth
  const handleProvinceChange = (value) => {
    const selectedProvinceData = provinceOptions.find(province => province.value === value);
    setDistrictOptions(selectedProvinceData ? selectedProvinceData.children : []);
    setCommuneOptions([]); // Reset commune options when province changes
    setVillageOptions([]); // Reset village options when province changes
    setSelectedProvince(value);
    setSelectedDistrict(null); // Reset district selection
    setSelectedCommune(null); // Reset commune selection
  };

  // Handle district change for Place of Birth
  const handleDistrictChange = (value) => {
    const selectedDistrictData = districtOptions.find(district => district.value === value);
    setCommuneOptions(selectedDistrictData ? selectedDistrictData.children : []);
    setVillageOptions([]); // Reset village options when district changes
    setSelectedDistrict(value);
    setSelectedCommune(null); // Reset commune selection
  };

  // Handle commune change for Place of Birth
  const handleCommuneChange = (value) => {
    const selectedCommuneData = communeOptions.find(commune => commune.value === value);
    setVillageOptions(selectedCommuneData ? selectedCommuneData.children : []);
    setSelectedCommune(value);
  };

  // Handle province change for Current Address
  const handleCurrentProvinceChange = (value) => {
    const selectedProvinceData = provinceOptions.find(province => province.value === value);
    setCurrentDistrictOptions(selectedProvinceData ? selectedProvinceData.children : []);
    setCurrentCommuneOptions([]); // Reset commune options when province changes
    setCurrentVillageOptions([]); // Reset village options when province changes
    setSelectedCurrentProvince(value);
    setSelectedCurrentDistrict(null); // Reset district selection
    setSelectedCurrentCommune(null); // Reset commune selection
  };

  // Handle district change for Current Address
  const handleCurrentDistrictChange = (value) => {
    const selectedDistrictData = currentDistrictOptions.find(district => district.value === value);
    setCurrentCommuneOptions(selectedDistrictData ? selectedDistrictData.children : []);
    setCurrentVillageOptions([]); // Reset village options when district changes
    setSelectedCurrentDistrict(value);
    setSelectedCurrentCommune(null); // Reset commune selection
  };

  // Handle commune change for Current Address
  const handleCurrentCommuneChange = (value) => {
    const selectedCommuneData = currentCommuneOptions.find(commune => commune.value === value);
    setCurrentVillageOptions(selectedCommuneData ? selectedCommuneData.children : []);
    setSelectedCurrentCommune(value);
  };

  // Handle student creation
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
        setDistrictOptions([]); // Reset district options
        setCommuneOptions([]); // Reset commune options
        setVillageOptions([]); // Reset village options
        setSelectedProvince(null); // Reset selected province
        setSelectedDistrict(null); // Reset selected district
        setSelectedCommune(null); // Reset selected commune
        setCurrentDistrictOptions([]); // Reset current district options
        setCurrentCommuneOptions([]); // Reset current commune options
        setCurrentVillageOptions([]); // Reset current village options
        setSelectedCurrentProvince(null); // Reset current province
        setSelectedCurrentDistrict(null); // Reset current district
        setSelectedCurrentCommune(null); // Reset current commune
        data(); // Refresh data from parent
        message.success("Student created successfully!");
        onClose();
      } else {
        message.error("Something went wrong! Cannot create student.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if(provinceOptions.length < 0 ){
    return null
  }


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
        {/* Student Information */}
        <div className="flex items-center my-1">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-600 font-semibold">Student Information</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex flex-row gap-4 justify-between">
          <Form.Item
            name="student_name"
            label="Name"
            rules={[{ required: true, message: "Please input student name!" }]}
            className="w-1/2"
          >
            <Input className="h-12" placeholder="Enter student name" />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Please select gender!" }]}
            className="w-1/2"
          >
            <Select className="h-12" placeholder="Select gender" options={genderOptions} />
          </Form.Item>

          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[{ required: true, message: "Please select date of birth!" }]}
            className="w-1/2"
          >
            <DatePicker className="h-12" placeholder="Select date of birth" style={{ width: "100%" }} format={"DD-MM-YYYY"} />
          </Form.Item>

          <Form.Item name="family_status" label="Family Status" className="w-1/2">
            <Select placeholder="Select family status" options={statusOptions} className="h-12" />
          </Form.Item>
        </div>

        {/* Place of Birth Address */}
        <div className="flex items-center my-1">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-600 font-semibold">Place of Birth Address</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex flex-row gap-4 justify-between">
          <Form.Item name="pob_village" label="Place of Birth - Village" className="w-1/2">
            <Select
              placeholder="Select village of birth"
              className="h-12"
              options={villageOptions.map(village => ({
                label: village.label,
                value: village.value,
              }))}
              disabled={!selectedCommune}
            />
          </Form.Item>

          <Form.Item name="pob_commune" label="Place of Birth - Commune" className="w-1/2">
          <Select
            placeholder="Select commune of birth"
            className="h-12"
            options={communeOptions.map(commune => ({
              label: commune.label,
              value: commune.value,
            }))}
            disabled={!selectedDistrict}
            onChange={handleCommuneChange}
            showSearch
            filterOption={(input, option) =>
              option.label.toLowerCase().includes(input.toLowerCase())
            }
          />

          </Form.Item>

          <Form.Item name="pob_district" label="Place of Birth - District" className="w-1/2">
            <Select
              placeholder="Select district of birth"
              className="h-12"
              options={districtOptions.map(district => ({
                label: district.label,
                value: district.value,
              }))}
              disabled={!selectedProvince}
              onChange={handleDistrictChange}
            />
          </Form.Item>

          <Form.Item name="pob_province" label="Place of Birth - Province" className="w-1/2">
            <Select
              placeholder="Select province of birth"
              className="h-12"
              options={provinceOptions.map(province => ({
                label: province.label,
                value: province.value,
              }))}
              onChange={handleProvinceChange}
            />
          </Form.Item>
        </div>

        {/* Current Address */}
        <div className="flex items-center my-1">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-600 font-semibold">Current Address</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex flex-row gap-4 justify-between">
          <Form.Item name="current_village" label="Current Village" className="w-1/2">
            <Select
              placeholder="Select current village"
              className="h-12"
              options={currentVillageOptions.map(village => ({
                label: village.label,
                value: village.value,
              }))}
              disabled={!selectedCurrentCommune}
            />
          </Form.Item>

          <Form.Item name="current_commune" label="Current Commune" className="w-1/2">
            <Select
              placeholder="Select current commune"
              className="h-12"
              options={currentCommuneOptions.map(commune => ({
                label: commune.label,
                value: commune.value,
              }))}
              disabled={!selectedCurrentDistrict}
              onChange={handleCurrentCommuneChange}
            />
          </Form.Item>

          <Form.Item name="current_district" label="Current District" className="w-1/2">
            <Select
              placeholder="Select current district"
              className="h-12"
              options={currentDistrictOptions.map(district => ({
                label: district.label,
                value: district.value,
              }))}
              disabled={!selectedCurrentProvince}
              onChange={handleCurrentDistrictChange}
            />
          </Form.Item>

          <Form.Item name="current_province" label="Current Province" className="w-1/2" >
            <Select
              placeholder="Select current province"
              className="h-12"
              options={provinceOptions.map(province => ({
                label: province.label,
                value: province.value,
              }))}
              onChange={handleCurrentProvinceChange}
            />
          </Form.Item>
        </div>

        {/* Parent's Information */}
        <div className="flex items-center my-1">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-600 font-semibold">Parent's Information</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex flex-row gap-4 justify-between">
          <Form.Item name="father_name" label="Father's Name" className="w-1/2">
            <Input placeholder="Enter father's name" className="h-12" />
          </Form.Item>

          <Form.Item name="father_job" label="Father's Job" className="w-1/2">
            <Input placeholder="Enter father's job" className="h-12" />
          </Form.Item>

          <Form.Item name="father_phone" label="Father's Phone" className="w-1/2">
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

          <Form.Item name="mother_phone" label="Mother's Phone" className="w-1/2">
            <Input placeholder="Enter mother's phone number" className="h-12" />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
}

export default CreateStudent;
