import { useState } from "react";
import Blog from "../../components/blog/Blog";
import Loader from "../../components/loader/Loader";
import useFetchData from "../../hooks/useDataFeatch/useFeatchData";
import PageCover from "../../shared/pageCover/PageCover";
import Container from "../../utils/container/Container";
import BlogFilter from "./BlogFilter";


const Blogs = () => {
  // state
  const [itemPerPage, setItemPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);

  //  api call
  const { data, isPending } = useFetchData(
    `/api/v1/blogs?currentPage=${currentPage}&itemPerPage=${itemPerPage}`,
    "blogs"
  );

  if (isPending) {
    return <Loader />;
  }

  
  // const { data: blogsLength, blogsLengthIsPending } = useFetchData(
  //   "/api/v1/blog/blogLength",
  //   "bloglength"
  // );
  


  const pages = Math.ceil(data?.length / itemPerPage);
  const pagination = [...new Array(pages).keys()];

  return (
    <div>
      <PageCover title={"Blogs"} />
      <Container>
        <div>
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

          <div className="flex justify-center">
            <div className="my-7">
              <button className="btn">next</button>
              {pagination.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(item)}
                  className="btn bg-white mr-2"
                >
                  {item}
                </button>
              ))}
              <button className="btn">previus</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
