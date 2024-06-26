import MyCourseItem from "./MyCourseItem";

function PendingCourse({ pendingCouses }) {
  return (
    <div className="grid gap-4 grid-cols-3">
      {pendingCouses?.map((item) => (
        <MyCourseItem item={item} key={item?.couseId} />
      ))}
    </div>
  );
}

export default PendingCourse;
