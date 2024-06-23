import DashboardNavItem from "../../../components/DashboardNavItem/DashboardNavItem";

const DashboardLeft = () => {
  return (
    <div className="w-full">
      <DashboardNavItem location={"/dashboard/profile"} text={"My Profile"} />
      <DashboardNavItem
        location={"/dashboard/dashboardMain"}
        text={"Dashboard"}
      />
      <DashboardNavItem location={"/dashboard/Message"} text={"Message"} />
      <DashboardNavItem location={"/dashboard/MyCourse"} text={"My Course"} />
      <DashboardNavItem location={"/dashboard/Wishlist"} text={"Wishlist"} />
      <DashboardNavItem location={"/dashboard/Reviews"} text={"Reviews"} />
      <DashboardNavItem location={"/dashboard/AllCourse"} text={"All Course"} />
      <DashboardNavItem
        location={"/dashboard/Assignments"}
        text={"Assignments"}
      />
    </div>
  );
};

export default DashboardLeft;
