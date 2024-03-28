/* eslint-disable react/prop-types */
import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className={` min-h-[calc(100vh-116px)]
      flex 
      flex-col gap-4
      justify-center 
      items-center `}
    >
      <div className="text-xl font-semibold">Loading...</div>
      <div>
        <HashLoader
          color="#36d7b7"
          cssOverride={{}}
          loading
          size={50}
          speedMultiplier={1}
        />
      </div>
    </div>
  );
};

export default Loader;
