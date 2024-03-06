import classNames from "classnames";
import MenuItem from "./MenuItem";
import { useMyData } from "../../Context";

function Menu() {
  const { isMiddle, setIsMiddle } = useMyData();

  const changeMenuSize = () => {
    setIsMiddle(!isMiddle);
  };

  return (
    <nav
      className={classNames(
        "relative w-[20%] transition-all flex flex-col px-2 pt-14 gap-2 border-l-2 border-solid border-gray-300 h-screen",
        {
          "w-[10%]": isMiddle,
        }
      )}
    >
      <MenuItem url={"/"}>Home</MenuItem>
      <MenuItem url={"/notes"}>My Notes</MenuItem>
      <MenuItem url={"/profile:user"}>Profile</MenuItem>
      <MenuItem url={"/settings"}>Settings</MenuItem>
      <button
        onClick={changeMenuSize}
        className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors -left-4"
      >
        {isMiddle ? (
          <i class="fa-solid fa-angle-left"></i>
        ) : (
          <i class="fa-solid fa-angle-right"></i>
        )}
      </button>
      <button className="w-[97%] h-8 left-1/2 -translate-x-1/2 absolute bottom-2 bg-slate-600 text-white rounded-md transition-colors hover:bg-slate-800">
        Sign Up / Log In
      </button>
    </nav>
  );
}

export default Menu;
