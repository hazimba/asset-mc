import './output.css';
import { Typography } from 'antd';

const { Text } = Typography;


const App = () => {
  return (
    <div className="content">
      <h1 className="text-2xl font-bold">Rsbuild with React</h1>
      <div className="text-red-600 text-2xl mt-10">
        Start building amazing things with Rsbuild.
      </div>
      <Text copyable>
        This is a simple example of using Rsbuild with React and Tailwind CSS.
      </Text>
    </div>
  );
};

export default App;
