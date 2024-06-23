const CourseTableRow = ({ item }) => {
  return (
    <tr className="p-3 border-[1px]">
      <td>
        <img
          className="w-32 rounded-lg"
          src={item?.course_image}
          alt="course image"
        />
      </td>
      <td>{item?.title}</td>
      <td>{item?.platform}</td>
      <td>{item?.level}</td>
      <td>{item?.duration}</td>
      <td>{item?.rating}</td>
      <td>{item?.reviews}</td>
      <td>{item?.language}</td>
      <td>{item?.certificate ? "true" : "flase"}</td>
      <td>
        <div className="flex gap-2">
          <button className="btn btn-primary btn-xs">delete</button>
          <button className="btn btn-primary btn-xs">update</button>
        </div>
      </td>
    </tr>
  );
};

export default CourseTableRow;
