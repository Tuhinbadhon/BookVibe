import { Link } from "react-router-dom";
import logo from "../assets/banner.png";
const Banner = () => {
  return (
    <div>
      <div className="hero rounded-3xl py-4 lg:py-20 bg-base-200">
        <div className="hero-content flex justify-between gap-5 lg:px-20  lg:gap-20  lg:flex-row">
          <div className=" ">
            <h1 className="lg:text-5xl   font-bold">
              Indeed we belong to{" "}
              <span className="bg-gradient-to-r from-[#23BE0A] to-gray-700 text-transparent bg-clip-text">
                Allah
              </span>
              , and indeed to Him we will return
            </h1>

            <Link to={`/listed_books`}>
              <button className="px-3 py-2 lg:font-bold lg:px-6 lg:py-3 rounded-lg lg:mt-12 mt-3 text-white bg-[#23BE0A] ">
                View The List
              </button>
            </Link>
          </div>

          <img
            src={logo}
            className="lg:max-w-sm lg:max-h-80 max-[450px]:max-w-28 rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
