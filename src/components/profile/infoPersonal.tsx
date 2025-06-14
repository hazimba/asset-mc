import { Image } from 'antd';
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons';

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
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="address"
            className="text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your address"
          />
        </div>
      </div>
    </div>
  );
};
export default InfoPersonal;
