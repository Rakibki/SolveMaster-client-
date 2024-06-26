import { Link } from "react-router-dom";
import Container from "../../../../utils/container/Container";
import { useContext, useState } from "react";
import { authContext } from "../../../../provider/authProvider/AuthProvider";
import useFetchData from "../../../../hooks/useDataFeatch/useFeatchData";
import Loader from "../../../../components/loader/Loader";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PublishCourse from "./PublishCourse";
import PendingCourse from "./PendingCourse";
import Draft from "./Draft";

const MyCourse = () => {
  const { user } = useContext(authContext);
  const [tabIndex, setTabIndex] = useState(0);

  const { data, isPending } = useFetchData(
    `/api/v1/myCourse/${user?.email}`,
    "mycourses"
  );

  const draftCouses = data?.filter((item) => item?.courseStatus === "draft");

  const publishCouse = data?.filter((item) => item?.courseStatus === "publish");

  const pendingCouses = data?.filter(
    (item) => item?.courseStatus === "pending"
  );

  if (isPending) {
    return <Loader />;
  }

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

          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
            className={"flex py-11 justify-center flex-col"}
          >
            <TabList className={"flex justify-center gap-3"}>
              <Tab
                className={`px-14 cursor-pointer ${
                  tabIndex == 0 && "bg-[#3F00E7] text-white"
                } rounded-lg shadow-md py-3`}
              >
                PUBLISH
              </Tab>
              <Tab
                className={`px-14 box-border cursor-pointer rounded-lg ${
                  tabIndex == 1 && "bg-[#3F00E7] text-white"
                } shadow-md py-3`}
              >
                PENDING
              </Tab>
              <Tab
                className={`px-14 cursor-pointer rounded-lg ${
                  tabIndex == 2 && "bg-[#3F00E7] text-white "
                } shadow-md py-3`}
              >
                DRAFT
              </Tab>
            </TabList>

            <div className="mt-7">
              <TabPanel>
                <PublishCourse publishCouse={publishCouse} />
              </TabPanel>
              <TabPanel>
                <PendingCourse pendingCouses={pendingCouses} />
              </TabPanel>
              <TabPanel>
                <Draft draftCouses={draftCouses} />
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </Container>
    </main>
  );
};

export default MyCourse;
