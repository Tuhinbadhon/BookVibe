import {
  FaFacebookF,
  FaGithub,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-green-100 via-amber-100 to-transparent bg-opacity-5 py-5 lg:py-14 lg:mt-20 mt-5 lg:px-32 px-5">
        <div className="">
          <a href="" className="flex justify-center items-center mb-4">
            <span className=" text-4xl font-bold max-[450px]:text-2xl bg-gradient-to-r from-green-500 to-[#59C6D2] text-transparent bg-clip-text">
              Book Vibe
            </span>
          </a>
          {/* <Link to="/">
          <a className=" pl-0 text-xl font-bold text-[#59C6D2]  ">
            Book <span className="text-[#23BE0A]">Vibe</span>
          </a>
        </Link> */}

          <div className="items-center  justify-center flex">
            <p className="lg:max-w-[600px]  text-center">
              A book is a garden, an orchard, a storehouse, a party, a company
              by the way, a counselor, a multitude of counselors _Charles
              Baudelaire
            </p>
          </div>
          <div className="mt-8 flex  gap-5 justify-center items-center">
            <FaTwitter className="w-7 h-7" />
            <FaFacebookF className="w-7 h-7" />
            <FaInstagramSquare className="w-7 h-7" />
            <FaGithub className="w-7 h-7" />
          </div>
          <hr className="lg:mt-12 mt-5 border-t-1.5 border-dashed border-black" />
          <p className="lg:mt-8 mt-5 mb-2 flex justify-center items-center">
            2024, All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
