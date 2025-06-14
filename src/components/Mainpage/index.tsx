import {
  RedoOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Input, Popover } from 'antd';
import { Link } from 'react-router-dom';

const Mainpage = () => {
  const content = ['home', 'manage', 'logout'].map((item) => (
    <Link
      key={item}
      to={`/${item.toLowerCase()}`}
      className="hover:bg-gray-100"
    >
      {item[0].toUpperCase() + item.slice(1)}
    </Link>
  ));

  return (
    <div className="flex flex-col w-full px-2">
      <div className="flex flex-col w-full justify-between items-center h-2/5 gap-2">
        <div className="flex gap-4 justify-between items-center w-full px-4 py-2 bg-gray-200 h-12 mt-2 rounded-2xl">
          <div className="w-1/5">
            <Input
              suffix={<SearchOutlined />}
              placeholder="Search..."
              className="w-full"
              style={{ borderRadius: '16px', height: '32px' }}
            />
          </div>
          <div className="flex w-2/3 gap-6 justify-end items-center">
            <RedoOutlined />
            <SettingOutlined />
            <div className="w-10">
              <Popover
                className="cursor-pointer"
                content={<div className="flex flex-col">{content}</div>}
                placement="bottom"
              >
                <UserOutlined className="cursor-pointer" />
              </Popover>
            </div>
          </div>
        </div>
        <div className="bg-gray-500 w-full h-full flex justify-center items-end rounded-2xl">
          This is Dashboard
        </div>
      </div>
      <div className="flex justify-center h-3/5 items-center">This is Main</div>
    </div>
  );
};
export default Mainpage;
