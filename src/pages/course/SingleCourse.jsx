import { Link } from "react-router-dom";
import getLocalStore from "../../utils/getLocalStore/getLocalStore";

const SingleCourse = ({ item }) => {
  const handleAddToCard = async (id) => {
    const lsCourses = await getLocalStore("Courses");
    const isExgiting = lsCourses.find((courseId) => courseId == id);
    if (isExgiting) {
      return alert("Already added cousr");
    }
    lsCourses.push(id);

    const lsCourseStr = JSON.stringify(lsCourses);
    console.log({ lsCourses });
    localStorage.setItem("Courses", lsCourseStr);
  };

  return (
    <div className="card card-compact  shadow-xl">
      <figure>
        <img src={item?.course_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item?.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link to={`/course/${item?.couseId}`}>
            <button className="btn btn-primary">Read More</button>
          </Link>

          <div>
            <button
              onClick={() => handleAddToCard(item?.couseId)}
              className="btn btn-primary"
            >
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
