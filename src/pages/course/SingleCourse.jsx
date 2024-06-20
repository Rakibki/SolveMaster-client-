import { Link } from "react-router-dom";

const SingleCourse = ({ item }) => {

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
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
