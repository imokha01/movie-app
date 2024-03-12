import { useState } from "react";
import { NavLink } from "react-router-dom";
import image from "../../public/Screenshot_2024-03-07_164543-removebg-preview (1).png";

const NavBar = () => {
  const [show, setShow] = useState();

  return (
    <div className="flex justify-around bg-slate-800 mt-0  p-5 ">
      <div className="flex relative justify-center items-center">
        <img src={image} alt="logo image" className="h-[55px]  cursor-pointer absolute z-[1] left-[-3rem] top-[-14px]" />
        <p className="text-[1.5rem] text-[#ff0000] cursor-pointer poppins-bold">
          {" "}
          MOVIE<span className="text-[#00ff00] ">HUB</span>
        </p>
      </div>
      <div className="flex gap-7  *:text-white items-center poppins-medium">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/series"}>Series</NavLink>
        <NavLink to={"/movies"}>Movies</NavLink>
        <NavLink to={"/pages"}>Pages</NavLink>
        <NavLink to={"/pricing"}>Pricing</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
      <div className="flex gap-5 *:text-white items-center *:cursor-pointer ">
        <i className="fa-solid  p-4 rounded-full fa-magnifying-glass border-[3px]"></i>
        <i className="fa-solid p-4 rounded-full fa-bell border-[3px]"></i>
        <i className="fa-solid p-4 rounded-full fa-user border-[3px]"></i>
        <button className="bg-red-600 p-3 px-9 rounded-3xl poppins-medium">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default NavBar;
