import { Tabs, TabsProps, Typography } from "antd";
import InfoPersonal from "./infoPersonal";

const { Text, Title } = Typography;

const Profile = () => {

  const items: TabsProps['items'] = [
    {
      key: "1",
      label: "Profile",
      children: <InfoPersonal />
    },
    {
      key: "2",
      label: "Settings",
      children: <Text>Settings Content</Text>,
    },
    {
      key: "3",
      label: "Activity",
      children: <Text>Activity Content</Text>,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-300">
      <div className="bg-white p-6 rounded-lg shadow-md w-3/4 h-1/2 overflow-y-scroll">
        <Title level={2} className="font-semibold">Profile</Title>
        <>
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={(key) => console.log(key)}
          />
        </>
      </div>
    </div>
  );
};
export default Profile;
