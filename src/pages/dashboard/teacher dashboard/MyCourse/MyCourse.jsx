import { Link } from "react-router-dom";
import Container from "../../../../utils/container/Container";
import { useContext } from "react";
import { authContext } from "../../../../provider/authProvider/AuthProvider";
import useFetchData from "../../../../hooks/useDataFeatch/useFeatchData";
import Loader from "../../../../components/loader/Loader";

const MyCourse = () => {
  const { user } = useContext(authContext);

  const { data, isPending } = useFetchData(
    `/api/v1/myCourse/${user?.email}`,
    "mycourses"
  );

  if (isPending) {
    return <Loader />;
  }

  console.log(data);

  return (
    <main>
      <Container>
        <div className="m-6 p-5 shadow-2xl rounded-xl">
          <div className="flex justify-between">
            <h2 className="text-3xl">My course</h2>
            <Link to={"/dashboard/CreateCourse"}>
              <button className="btn btn-primary">Create course</button>
            </Link>
          </div>

          {/* course list */}
          <div>{data?.length}</div>
        </div>
      </Container>
    </main>
  );
};

export default MyCourse;
