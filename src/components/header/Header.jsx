import { Link, NavLink } from "react-router-dom";
import Container from "../../utils/container/Container";
import NavItems from "./NavItems";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <nav>
      <Container>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <NavItems />
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavItems />
            </ul>
          </div>
          <div className="navbar-end flex gap-3">
            <div className="flex gap-1">
              <div className="p-3 border-slate-700 border-2 rounded-md">
                <NavLink to={"/dashboard/profile"}>
                  <FaRegUser />
                </NavLink>
              </div>
              <div className="p-3 border-slate-700 border-2 rounded-md">
                <MdOutlineAddShoppingCart />
              </div>
            </div>

            <NavLink to={"/authentication"}>
              <a className="btn">Login</a>
            </NavLink>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
