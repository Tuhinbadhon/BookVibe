import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayout = () => {
  return (
    <div>
      <div className="lg:mx-28 lg:mt-12 mx-3 mt-3">
        <Nav />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
