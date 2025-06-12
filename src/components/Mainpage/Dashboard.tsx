const Dashboard = () => {
  return (
    <div className="flex flex-col w-full h-screen">
        <div className="flex flex-col flex-auto items-center justify-center bg-gray-100">
        <h1>Top bar</h1>
        <p>This is the top bar content area.</p>
      </div>
      <div className="flex flex-col flex-auto items-center h-1/2 justify-center bg-gray-200">
        <h1>Welcome to the Main Page</h1>
        <p>This is the main content area.</p>
      </div>
    </div>
  );
};
export default Dashboard;
