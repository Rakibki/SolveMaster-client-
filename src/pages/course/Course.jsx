import { useState } from "react";
import PageCover from "../../shared/pageCover/PageCover";
import Container from "../../utils/container/Container";
import useFetchData from "../../hooks/useDataFeatch/useFeatchData";
import Loader from "../../components/loader/Loader";
import SingleCourse from "./SingleCourse";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";

const Course = () => {
  const [dataShape, setDataShape] = useState("grid");

  const { data, isPending } = useFetchData(`/api/v1/courses`, "courses");

  if (isPending) {
    return <Loader />;
  }

  return (
    <>
      <PageCover title={"Our Course"} />

      <section>
        <Container>
          <div className="my-10 flex justify-between">
            <h2>Course Showing: {data?.length}</h2>
            <div className="flex items-center gap-3">
              <div className="flex gap-5">
                <FaList
                  className={`size-5 ${
                    dataShape === "list"
                      ? "text-[rgb(95,45,237)]"
                      : "text-[black]"
                  } cursor-pointer`}
                  onClick={() => setDataShape("list")}
                />
                <BsFillGrid3X3GapFill
                  className={`size-5 ${
                    dataShape === "grid"
                      ? "text-[rgb(95,45,237)]"
                      : "text-[black]"
                  } cursor-pointer`}
                  onClick={() => setDataShape("grid")}
                />
              </div>
              <select className="px-4 py-2">
                <option value="">Select</option>
                <option value="one">one</option>
                <option value="two">two</option>
                <option value="three">three</option>
                <option value="four">four</option>
              </select>
            </div>
          </div>
          <div
            className={`grid ${
              dataShape === "grid" ? "grid-cols-3" : "grid-cols-1"
            } gap-4`}
          >
            {data?.map((item) => (
              <SingleCourse key={item?.couseId} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Course;
