import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import EmployeeList from './employee/EmployeeList';

const Manage = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Employees',
      children: <EmployeeList />,
    },
    {
      key: '2',
      label: 'Patients',
      children: 'Content of Tab Pane 2',
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div className="flex flex-col w-full h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Page</h1>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};
export default Manage;
