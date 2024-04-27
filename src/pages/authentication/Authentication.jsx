import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Login from "./Login";
import Register from "./Register";
import Container from "../../utils/container/Container";
import PageCover from "../../shared/pageCover/PageCover";
import { useState } from "react";

const Authentication = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <main>
      <section className="bg-[#F3E9F6]">
        <Container>
          <div>
            <PageCover title={"Login"} />
            <Tabs
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
              className={"flex py-11 justify-center flex-col"}
            >
              <TabList className={"flex justify-center gap-3"}>
                <Tab
                  className={`px-14 box-border ${
                    tabIndex == 0 && "bg-white border-t-2 border-[#5F2DED]"
                  } rounded-lg shadow-md bg-[rgb(243,244,253)] py-3`}
                >
                  Login
                </Tab>
                <Tab
                  className={`px-14 box-border rounded-lg ${
                    tabIndex == 1 && "bg-white border-t-2 border-[#5F2DED]"
                  } shadow-md bg-[rgb(243,244,253)] py-3`}
                >
                  Register
                </Tab>
              </TabList>

              <TabPanel className={"mt-8"}>
                <Login />
              </TabPanel>
              <TabPanel>
                <Register />
              </TabPanel>
            </Tabs>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Authentication;
