import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useDataFeatch/useFeatchData";
import Loader from "../../components/loader/Loader";
import PageCover from "../../shared/pageCover/PageCover";
import Container from "../../utils/container/Container";
import courseSidImage from "../../assets/images/blog_7 (1).png";

const CourseDetails = () => {
  const { courseId } = useParams();

  const { data, isPending } = useFetchData(`/api/v1/course/${courseId}`);

  if (isPending) {
    return <Loader />;
  }

  return (
    <main>
      <PageCover title={"Course Cover"} />

      <section>
        <Container>
          <div className="grid my-10 gap-9 grid-cols-7">
            <div className="col-span-5">
              <img
                src={data?.course_image}
                className="mb-8 w-full"
                alt="course main image"
              />
              <h1 className="text-3xl">{data?.title}</h1>
              <p className="mt-4">{data?.description}</p>
            </div>
            <div className="col-span-2 bg-white shadow-xl">
              <div className="p-3">
                <img src={courseSidImage} alt="" />
              </div>

              <div className="flex mt-2 px-3 justify-between">
                <h2 className="text-xl font-semibold">${data?.reviews}</h2>
                <h2 className="text-base font-semibold p-4 py-1">68% OFF</h2>
              </div>

              <div className="flex flex-col gap-2 mt-5">
                <button className="btn btn-primary">Add To Cart</button>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default CourseDetails;
