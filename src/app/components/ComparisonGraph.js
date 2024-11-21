import { BsGraphUp } from "react-icons/bs";
import LineChart from "./LineChart";

const ComparisonGraph = ({percentile}) => {
  return (
    <>
      <h3 className="text-sm font-bold text-black">Comparison Graph</h3>
      <div className="flex">
        <p className="mt-2 text-sm text-gray-500">
          <span className="font-bold">You scored {percentile}%  percentile</span> which is
          lower than the average percentile 72% of all the engineers who took
          this assessment.
        </p>
        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center mr-4 rounded-full">
          <BsGraphUp className="text-xl text-red-500" />
        </div>
      </div>
      <div className="mt-4 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Graph goes here</p>
        <LineChart />
      </div>
    </>
  );
};

export default ComparisonGraph;
