import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";

const Blog = ({ blog }) => {
  return (
    <Link to={`/blog/${blog?.BlogId}`}>
      <div className="border-0 relative bg-base-100 shadow-xl">
        <figure className="h-[200px]">
          <img className="h-full w-full" src={blog?.Image} alt="blog image" />
        </figure>
        <div className="px-4 pb-2 py-6">
          <h2 className="card-title text-lg">{blog?.Title}</h2>
          <div className="flex gap-4 mt-3 mb-4 items-center">
            <div className="flex items-center gap-2">
              <FaRegUser />
              <p>{blog?.Author?.Name}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCommentAlt />
              <p>20</p>
            </div>
          </div>
          <p>{blog?.Desc1.slice(0, 70)}...</p>
          <div className="card-actions my-3 justify-end">
            <button className="btn btn-sm btn-primary">READ MORE</button>
          </div>
        </div>
        <div className="absolute rounded-lg bg-[rgb(95,45,237)] top-3 p-3 right-3">
          <p className="text-sm font-medium text-white">{blog?.PostDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
