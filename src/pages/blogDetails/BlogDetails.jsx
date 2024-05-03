import Loader from "../../components/loader/Loader";
import useFetchData from "../../hooks/useDataFeatch/useFeatchData";
import Container from "../../utils/container/Container";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, isPending } = useFetchData(`/api/v1/blog/${id}`);

  if (isPending) {
    return <Loader />;
  }

  return (
    <div>
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <div className="">
              <img
                className="w-full h-full bg-cover"
                src={data?.Image}
                alt=""
              />
            </div>
          </div>

          <div className="col-span-4"></div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
