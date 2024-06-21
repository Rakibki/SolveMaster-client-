import { NavLink } from "react-router-dom";

const DashboardNavItem = ({ location, text }) => {
  return (
    <NavLink
      to={location}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "block mb-1 bg-[#ccbfbf] border-b-[1px]"
          : "block mb-1 border-b-[1px]"
      }
    >
      <div className="px-4 py-2">
        <p className="text-[18px]">{text}</p>
      </div>
    </NavLink>
  );
};

export default DashboardNavItem;
