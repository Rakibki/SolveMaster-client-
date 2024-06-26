const MyCourseItem = ({ item }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={item?.course_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item?.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default MyCourseItem;
