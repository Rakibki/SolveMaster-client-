import MyCourseItem from "./MyCourseItem";

const Draft = ({ draftCouses }) => {
  return (
    <div className="grid gap-4 grid-cols-3">
      {draftCouses?.map((item) => (
        <MyCourseItem item={item} key={item?.couseId} />
      ))}
    </div>
  );
};

export default Draft;
