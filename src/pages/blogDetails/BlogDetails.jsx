import useFetchData from "../../hooks/useDataFeatch/useFeatchData";
import Container from "../../utils/container/Container";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const blogData = useFetchData(`/api/v1/blog/${id}`);

  return (
    <div>
      <Container>
        <img src={blogData?.data?.Image} alt="" />
      </Container>
    </div>
  );
};

export default BlogDetails;