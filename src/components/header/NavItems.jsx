import { NavLink } from "react-router-dom";

const NavItems = () => {
  return (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700 underline" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700 underline" : ""
          }
          to={"/about"}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700 underline" : ""
          }
          to={"/blogs"}
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700 underline" : ""
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700 underline" : ""
          }
          to={"/contact"}
        >
          Problems
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700 underline" : ""
          }
          to={"/courses"}
        >
          Courses
        </NavLink>
      </li>
    </>
  );
};

export default NavItems;
