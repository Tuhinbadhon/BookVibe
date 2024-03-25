import logo from "../assets/banner.png";
const Banner = () => {
  return (
    <div>
      <div className="hero rounded-3xl py-4 lg:py-20 bg-base-200">
        <div className="hero-content flex justify-between gap-5   lg:gap-24  lg:flex-row">
          <div className=" ">
            <h1 className="lg:text-5xl  font-bold">
              Books to Freshen <br /> Up Your Bookshelf
            </h1>

            <button className="btn lg:mt-12 mt-3 text-white bg-[#23BE0A] ">
              View The List
            </button>
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
