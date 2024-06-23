import Loader from "../../../../components/loader/Loader";
import useFetchData from "../../../../hooks/useDataFeatch/useFeatchData";
import Container from "../../../../utils/container/Container";
import CourseTableRow from "./CourseTableRow";

const AllCourse = () => {
  const { data, isPending } = useFetchData(`/api/v1/courses`, "courses");

  if (isPending) {
    return <Loader />;
  }

  return (
    <main>
      <div>
        <Container>
          <div className="flex justify-between">
            <div>Total Course: {data?.length}</div>
            <div>sort:</div>
          </div>

          {/* couse list */}
          <div className="mt-8">
            <table className="table-auto">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>platform</th>
                  <th>level</th>
                  <th>Duration</th>
                  <th>Rating</th>
                  <th>Kanguage</th>
                  <th>Certificate</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <CourseTableRow key={index} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default AllCourse;
