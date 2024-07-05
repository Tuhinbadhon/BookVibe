import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Books from "../components/Books";

const Home = () => {
  return (
    <div className="lg:mx-28 lg:mt-12 mx-4 mb-3 lg:mb-24 mt-3">
      <Helmet title="book Vibe | Home" />
      <Banner />
      <Books />
    </div>
  );
};

export default Home;
