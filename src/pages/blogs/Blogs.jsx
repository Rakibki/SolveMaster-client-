import Blog from "../../components/blog/Blog";
import Loader from "../../components/loader/Loader";
import useFetchData from "../../hooks/useDataFeatch/useFeatchData";
import Container from "../../utils/container/Container";

const Blogs = () => {
  const { data, isPending } = useFetchData("/api/v1/blogs", "blogs");

  if (isPending) {
    return <Loader />;
  }

  return (
    <div>
      <Container>
        <h3>Blogs</h3>

        <div className="w-full gap-7 flex">
          <div className="grid grid-cols-3 gap-8 overflow-hidden w-[70%]">
            {data?.map((item) => (
              <Blog key={item?.BlogId} blog={item} />
            ))}
          </div>
          <div className="w-[30%]">filter</div>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
