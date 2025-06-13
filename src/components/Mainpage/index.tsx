import { UserOutlined } from '@ant-design/icons';
import { Input, Popover } from 'antd';

const Mainpage = () => {
  return (
    <div className="flex flex-col w-full bg-gray-300">
      <div className="flex flex-col w-full justify-between items-center h-2/5">
        <div className="flex gap-4 justify-between items-center w-full px-4 py-2 bg-gray-200 h-12">
          <div className='w-1/3'>
            <Input />
          </div>
          <div className="flex w-2/3 gap-6 justify-end items-center">
            <div>Icon 1</div>
            <div>Icon 2</div>
            <Popover
            className='cursor-pointer mr-2'
              content={
                <div className="flex flex-col">
                  <div className="p-2">Profile</div>
                  <div className="p-2">Settings</div>
                  <div className="p-2">Logout</div>
                </div>
              }
              placement="bottom"
            >
              <UserOutlined className="cursor-pointer" />
            </Popover>
          </div>
        </div>
        <div className="bg-gray-500 w-full h-full flex justify-center items-end">
          This is Dashboard
        </div>
      </div>
      <div className="flex justify-center items-center">This is Main</div>
    </div>
  );
};
export default Mainpage;
