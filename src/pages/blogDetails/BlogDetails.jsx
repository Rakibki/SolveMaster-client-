import Loader from "../../components/loader/Loader";
import useFetchData from "../../hooks/useDataFeatch/useFeatchData";
import PageCover from "../../shared/pageCover/PageCover";
import Container from "../../utils/container/Container";
import { useParams } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Comments from "./Comments";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, isPending } = useFetchData(`/api/v1/blog/${id}`);

  if (isPending) {
    return <Loader />;
  }

  return (
    <div>
      <PageCover title={"Blog details"} />
      <Container>
        <div className="grid mt-6 grid-cols-12">
          <div className="col-span-8">
            <div className="">
              <h2 className="text-3xl font-semibold">{data?.Title}</h2>
              <div className="flex gap-4 mt-3 mb-4 items-center">
                <div className="flex items-center gap-2">
                  <FaRegUser />
                  <p>{data?.Author?.Name}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegCommentAlt />
                  <p>20</p>
                </div>
              </div>
              <img
                className="w-full mt-7 h-full bg-cover"
                src={data?.Image}
                alt="blog image"
              />
            </div>
            <div className="mt-5">
              <p>{data?.Desc1}</p>
              <p className="mt-5">{data?.Desc2}</p>

              <div className="mt-8 mb-12">
                <h2 className="text-2xl mb-2">Intrinsic Motivation</h2>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam.
                </p>
              </div>
              <div className="flex pb-6 border-b-2 justify-between">
                <div className="flex items-center gap-3">
                  <p>Tags:</p>
                  {data?.Tags?.map((item, index) => {
                    return (
                      <div
                        className="border-[1px] border-[black] rounded-md px-3 py-1"
                        key={index}
                      >
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center gap-3">
                  <p>Share on:</p>
                  <div className="flex items-center gap-2">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <img
                  className="rounded-full h-[100px] min-w-[100px]"
                  src={data?.Author?.Image}
                  alt=""
                />
                <div>
                  <h3 className="text-2xl">{data?.Author?.Name}</h3>
                  <p>{data?.Author?.authorDesc}</p>
                </div>
              </div>
              <Comments BlogId={data?.BlogId} />
            </div>
          </div>

          <div className="col-span-4"></div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
