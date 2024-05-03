import Loader from "../../components/loader/Loader";
import useFetchData from "../../hooks/useDataFeatch/useFeatchData";

const LatestBlog = () => {
  const { data, isPending } = useFetchData("/api/v1/blogs", "blogs");
  const latestBlogs = data.slice(0, 6);

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col gap-3">
      {latestBlogs?.map((blogItem, index) => {
        return (
          <div
            key={blogItem?.BlogId}
            className="flex h-[80px] relative gap-3 items-center"
          >
            <img
              className="w-[120px] min-h-[100%]"
              src={blogItem?.Image}
              alt="lastest image"
            />
            <div>
              <p>{blogItem?.Title}</p>
              <p>{blogItem?.PostDate}</p>
            </div>
            <div className="bg-[rgb(95,45,237)] absolute top-0 px-2 left-0">
              <p className="text-white">{index + 1}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LatestBlog;
