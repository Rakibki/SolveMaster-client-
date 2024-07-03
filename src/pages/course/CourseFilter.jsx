const CourseFilter = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl">Search Here</h2>
      <input
        name="text"
        type="text"
        placeholder="Search"
        className="input mt-3 input-bordered w-full"
      />
    </div>
  );
};

export default CourseFilter;
