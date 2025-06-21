import { Tabs, TabsProps, Typography } from "antd";
import UserInformation from "./UserInformation.tsx";
import Copyright from "../../shared/copyright";
import AddNewUser from "./AddNewUser.tsx";

const { Text, Title } = Typography;

const Profile = () => {

  const items: TabsProps['items'] = [
    {
      key: "1",
      label: "Profile",
      children: <UserInformation />
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
    {
      key: "4",
      label: "Add New User",
      children: <AddNewUser />
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-300">
      <div className="w-3/4 p-6 bg-white rounded-lg shadow-md">
        <Title level={2} className="text-center mb-6">User Profile</Title>
        <Tabs
          defaultActiveKey="1"
          items={items}
          className="w-full"
        />
      </div>
      <Copyright />
    </div>
  );
};
export default Profile;
