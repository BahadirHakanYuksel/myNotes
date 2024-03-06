import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import classNames from "classnames";
import { useMyData } from "../Context";

function MainLayout() {
  const { isMiddle } = useMyData();

  return (
    <div className="w-full flex flex-col h-screen bg-white text-black">
      <div>
        <header className="w-full absolute top-0 left-0 h-12 bg-gradient-to-r from-violet-500 to-indigo-800 flex items-center px-4 text-lg font-semibold justify-end text-white z-10">
          My Notes
        </header>
      </div>
      <div className="w-full flex">
        <div
          className={classNames("w-[80%]", {
            "w-[90%]": isMiddle,
          })}
        >
          <Outlet />
        </div>

        <Menu />
      </div>
    </div>
  );
}

export default MainLayout;
