import Blog from "../../components/blog/Blog";
import Loader from "../../components/loader/Loader";
import useFetchData from "../../hooks/useDataFeatch/useFeatchData";

const Blogs = () => {
  const { data, isPending } = useFetchData("/api/v1/blogs", "blogs");

  if (isPending) {
    return <Loader />;
  }

  return (
    <div>
      <h3>Blogs</h3>

      {data?.map((item) => (
        <Blog key={item?.BlogId} blog={item?.blog} />
      ))}
    </div>
  );
};

export default Blogs;
