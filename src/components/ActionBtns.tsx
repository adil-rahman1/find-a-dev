const ActionBtns = () => {
  return (
    <div className="my-1 flex flex-row-reverse gap-x-2">
      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-2">
        Apply
      </button>
      <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
        Save
      </button>
    </div>
  );
};

export default ActionBtns;
