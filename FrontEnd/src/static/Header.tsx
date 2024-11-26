import { Link } from "react-router-dom";
import pix from "../assets/logo.webp";

const Header = () => {
  const nav = [
    // { Id: 1, path: "/", title: "Hme" },
    { id: 2, path: "/men-sneaker", title: "Men " },
    { id: 3, path: "/women-sneaker", title: "women " },
    { id: 4, path: "/Aboutus", title: "About us" },
    { id: 5, path: "/womn", title: "Services" },
  ];
  return (
    <div>
      <div
        className="w-full h-[80px] flex justify-center
      "
      >
        <div className="w-[93%] h-full  flex justify-between">
          <Link to={"/"}>
            <div className="w-[80%] h-full  flex items-center justify-center">
              <img src={pix} alt="img" />
            </div>
          </Link>
          <div className="w-[65%] h-full  flex justify-between">
            <div className="flex gap-7 items-center">
              {nav.map((el) => (
                <Link to={el.path}>{el.title}</Link>
              ))}
            </div>
            <div className="flex items-center">
              <button className="w-[200px] h-[45px] rounded-md bg-slate-950 hover:bg-slate-800 transition-all duration-300 text-white font-semibold">
                purchase shooz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
