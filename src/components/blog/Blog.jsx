import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  return (
    <Link to={`/blog/${blog?.BlogId}`}>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={blog?.Image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
