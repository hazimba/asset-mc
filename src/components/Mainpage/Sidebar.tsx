const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-64">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul className="space-y-2">
        <li>
          <a href="#home" className="text-blue-500 hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-blue-500 hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="text-blue-500 hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
