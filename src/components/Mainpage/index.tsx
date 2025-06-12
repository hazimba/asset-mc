import Dashboard from './Dashboard';
import Sidebar from './Sidebar';

const Mainpage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
};
export default Mainpage;
