/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";
import ChartGraph from "../components/ChartGraph";
import "../components/ChartGraph.css";
const PagesToRead = () => {
  return (
    <div className="lg:mr-28 lg:ml-16 lg:my-12 mr-4  mb-3  mt-3">
      <Helmet title="PagesToRead" />
      <ChartGraph />
    </div>
  );
};

export default PagesToRead;
