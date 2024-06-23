import { Link } from "react-router-dom";
import Container from "../../../../utils/container/Container";

const MyCourse = () => {
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
        </div>
      </Container>
    </main>
  );
};

export default MyCourse;
