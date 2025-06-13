const Mainpage = () => {
  return (
    <div className="flex flex-col w-full bg-gray-300">
    <div className="flex flex-col w-full justify-between items-center h-1/3">
      <div className="flex gap-4 justify-between items-center w-full px-4 py-2 bg-gray-200 h-12">
        <div>Search</div>
        <div className="flex gap-2">
          <div>Icon 1</div>
          <div>Icon 2</div>
          <div>Icon 3</div>
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
