import Blog from "../../components/blog/Blog";
import Loader from "../../components/loader/Loader";
import useFetchData from "../../hooks/useDataFeatch/useFeatchData";
import PageCover from "../../shared/pageCover/PageCover";
import Container from "../../utils/container/Container";
import BlogFilter from "./BlogFilter";

const Blogs = () => {
  const { data, isPending } = useFetchData("/api/v1/blogs", "blogs");

  if (isPending) {
    return <Loader />;
  }

  return (
    <div>
      <PageCover title={"Blogs"} />

      <Container>
        <div className="w-full mt-24 gap-7 flex">
          <div className="grid grid-cols-3 gap-3 overflow-hidden w-[70%]">
            {data?.map((item) => (
              <Blog key={item?.BlogId} blog={item} />
            ))}
          </div>
          <div className="shadow-lg p-5 inline-block w-[30%]">
            <BlogFilter />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
