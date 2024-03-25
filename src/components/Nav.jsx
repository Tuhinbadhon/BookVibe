import { useEffect } from "react";
import { useState } from "react";

const Nav = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }),
    [theme];
  const handleToogle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="navbar bg-base-100   lg:sticky flex gap-0 justify-between  lg:z-10">
      <div className="navbar-start lg:w-1/3 w-auto ">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost px-0  lg:hidden"
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
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Listed Books</a>
            </li>

            <li>
              <a>Pages to Read</a>
            </li>
            <li>
              <a className="text-primary">Blogs</a>
            </li>
            <li>
              <a>Bookmarks</a>
            </li>
          </ul>
        </div>
        <a className=" pl-0 font-bold text-secondary btn-ghost text-2xl">
          Book <span className="text-primary">Vibe</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Listed Books</a>
          </li>

          <li>
            <a>Pages to Read</a>
          </li>
          <li>
            <a className="text-primary">Blogs</a>
          </li>
          <li>
            <a>Bookmarks</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2 lg:gap-4">
        <label className="cursor-pointer ml-2 grid place-items-center">
          <input
            onChange={handleToogle}
            type="checkbox"
            className="toggle   theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        <button className=" px-3 py-2 lg:px-6 lg:py-3 bg-[#23BE0A] text-sm rounded-lg text-white">
          Sign In
        </button>
        <button className=" px-3 py-2 lg:px-6 lg:py-3 bg-[#59C6D2] text-sm rounded-lg text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;
