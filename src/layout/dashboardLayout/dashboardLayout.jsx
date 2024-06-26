import { useContext } from "react";
import Container from "../../utils/container/Container";
import { authContext } from "../../provider/authProvider/AuthProvider";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import DashboardLeft from "./dashboard_left/DashboardLeft";
import useGetRole from "../../hooks/useGetRole/useGetRole";

const DashboardLayout = () => {
  const { user } = useContext(authContext);

  const userRole = useGetRole();

  return (
    <main className="">
      <Header />
      <div>
        <Container>
          <div>
            <div className="py-10 px-5 bg-slate-700 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="p-3 border-[1px] h-[180px] rounded-full w-[180px] border-[#fff]">
                  <img
                    className="rounded-full w-full h-full"
                    src={user?.photoURL}
                    alt="login user image"
                  />
                </div>
                <div>
                  <h2 className="text-2xl text-white">{user?.displayName}</h2>
                  <h4 className="text-lg px-6 text-white my-3 bg-[#17093E] py-[2px]">
                    {userRole}
                  </h4>
                </div>
              </div>
            </div>
            {/* profile contetn */}
            <div className="grid gap-6 mt-6 grid-cols-11">
              <div className="col-span-2 shadow-xl p-4">
                <DashboardLeft />
              </div>
              <div className="col-span-9">
                <Outlet />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default DashboardLayout;
