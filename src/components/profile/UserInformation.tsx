import { DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import UserDetails from './UserDetails.tsx';

const InfoPersonal = () => {
  const image = null;
  const name = 'Hazim';

  return (
    <div className="flex w-full gap-4">
      <div className="w-1/2 flex flex-col">
        <div className="flex justify-center items-center mb-4">
          {image ? (
            <Image
              width={200}
              height={200}
              className="rounded-full"
              alt="Profile"
              src={image}
            />
          ) : (
            <div className="w-[200px] h-[200px] rounded-full bg-gray-100 flex items-center justify-center text-xl">
              {name.split('')[0]}
            </div>
          )}
        </div>
        <div className="flex justify-evenly items-center">
          <div className="p-2 rounded-3xl hover:bg-gray-200 cursor-pointer">
            <UploadOutlined />
          </div>
          <div className="p-2 rounded-3xl hover:bg-gray-200 cursor-pointer">
            <DeleteOutlined />
          </div>
        </div>
      </div>
      <UserDetails />
    </div>
  );
};
export default InfoPersonal;
