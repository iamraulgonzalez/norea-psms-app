import React,{useState} from 'react';
import { Modal, Tabs, Form, Input, Button } from 'antd';
const { TabPane } = Tabs;
export const ViewStudentDetails = ({ isOpen, onClose, data }) => {
  const [activeTab, setActiveTab] = useState("1");
  if (!data) {
    return null;
  }

  const handleTabChange = (key) => {
    setActiveTab(key);
  };
  return (
    <Modal
      title="View Student Details"
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={1000}
      className="p-4"
    >
      <div className="flex flex-col">
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-lg text-gray-700 font-semibold">
          Student Information
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
        
      </div>
      <div className='flex flex-row justify-between'>
        <span className='flex flex-col'>
        {data.student_id}
        {data.student_name}
        {data.gender === "male" ? "ប្រុស" : "ស្រី"}
        {data.dob}
        </span>
        <span className='flex flex-col'>
        {data.pob_village}, {data.pob_commune}, {data.pob_district},{" "}
              {data.pob_province}
        </span>
        <span className='flex flex-col'>
        {data.current_village}, {data.current_commune},{" "}
              {data.current_district}, {data.current_province}
        </span>
      </div>
      <div>
      <Tabs activeKey={activeTab} onChange={handleTabChange} type="card">
        <TabPane tab="Tab 1" key="1">
        {/* <table className="w-full border-collapse mt-4">
        <tbody>
          <tr className="border-b border-gray-200">
            <th className="text-left p-3 text-gray-600 font-medium">ID</th>
            <td className="p-3 text-gray-700">{data.student_id}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="text-left p-3 text-gray-600 font-medium">Name</th>
            <td className="p-3 text-gray-700">{data.student_name}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="text-left p-3 text-gray-600 font-medium">Gender</th>
            <td className="p-3 text-gray-700">
              {data.gender === "male" ? "ប្រុស" : "ស្រី"}
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="text-left p-3 text-gray-600 font-medium">
              Date of Birth
            </th>
            <td className="p-3 text-gray-700">{data.dob}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="text-left p-3 text-gray-600 font-medium">
              Place of Birth
            </th>
            <td className="p-3 text-gray-700">
              {data.pob_village}, {data.pob_commune}, {data.pob_district},{" "}
              {data.pob_province}
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="text-left p-3 text-gray-600 font-medium">
              Current Address
            </th>
            <td className="p-3 text-gray-700">
              {data.current_village}, {data.current_commune},{" "}
              {data.current_district}, {data.current_province}
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="text-left p-3 text-gray-600 font-medium">Father</th>
            <td className="p-3 text-gray-700">
              {data.father_name} ({data.father_job}, {data.father_phone})
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="text-left p-3 text-gray-600 font-medium">Mother</th>
            <td className="p-3 text-gray-700">
              {data.mother_name} ({data.mother_job}, {data.mother_phone})
            </td>
          </tr>
          <tr>
            <th className="text-left p-3 text-gray-600 font-medium">
              Family Status
            </th>
            <td className="p-3 text-gray-700">
              {data.family_status === "poor" ? "ក្រីក្រ" : "ធម្មតា"}
            </td>
          </tr>
        </tbody>
      </table> */}
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <Form layout="vertical">
            <Form.Item label="Phone Number">
              <Input placeholder="Enter your phone number" />
            </Form.Item>
            <Form.Item label="Address">
              <Input placeholder="Enter your address" />
            </Form.Item>
            <Button type="primary">Submit</Button>
          </Form>
        </TabPane>
      </Tabs>
      </div>
      </div>
    </Modal>
  );
};
