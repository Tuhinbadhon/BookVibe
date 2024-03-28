/* eslint-disable react/prop-types */
import ChartGraph from "../components/ChartGraph";

const PagesToRead = ({ readBooks }) => {
  console.log(readBooks);
  return (
    <div>
      <ChartGraph readBooks={readBooks} />
    </div>
  );
};

export default PagesToRead;
