import getLocalStore from "../../utils/getLocalStore/getLocalStore";

const CourseCard = () => {
  const lsItems = getLocalStore("Courses");

  return (
    <div className="w-[250px] p-3 bg-white shadow-xl h-[400px]">CourseCard</div>
  );
};

export default CourseCard;
