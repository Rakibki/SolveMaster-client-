import MyCourseItem from "./MyCourseItem";

const PublishCourse = ({ publishCouse }) => {

  return (
    <div className="grid gap-4 grid-cols-3">
      {publishCouse?.map((item) => (
        <MyCourseItem item={item} key={item?.couseId} />
      ))}
    </div>
  );
};

export default PublishCourse;
