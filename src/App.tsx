import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './components/home';
import Mainpage from './components/mainpage';
import './output.css';
import Manage from './components/manage';
import Profile from './components/profile';

const App = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col items-center justify-center w-64 bg-gray-100 min-h-screen">
        <h2 className="text-xl font-bold">Sidebar</h2>
        <a href="/">Dashboard</a>
        <a href="/home">Home</a>
        <a href="/manage">Manage</a>
        <a href="/settings">Settings</a>
        <a href="/profile">Profile</a>
        <a href="/logout">Logout</a>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
