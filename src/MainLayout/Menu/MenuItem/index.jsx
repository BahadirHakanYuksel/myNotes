import classNames from "classnames";
import { NavLink } from "react-router-dom";

function MenuItem({ children, url }) {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        classNames(
          "bg-indigo-50 text-blue-600 text-base flex items-center px-3 font-medium transition-all rounded-full w-full h-9 hover:bg-indigo-100",
          {
            "!bg-indigo-600 !text-white": isActive,
          }
        )
      }
    >
      {children}
    </NavLink>
  );
}

export default MenuItem;
