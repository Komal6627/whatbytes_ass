import { GiTrophyCup } from "react-icons/gi";
import { PiNotepadDuotone } from "react-icons/pi";
import { FcApproval } from "react-icons/fc";

const QuickStastics = ({ rank, percentile, score }) => {

  return (
    <>
       <h3 className="text-sm font-bold text-left  text-black w-full">
                Quick Statistics
              </h3>

              <div className="flex justify-between w-full mt-4">
                {/* Rank Column */}
                <div className="text-center flex-1 border-r-2 pr-4  ml-6  flex items-center">
                  <div className="bg-gray-200 w-10 h-10 flex items-center justify-center mr-4 rounded-full">
                    <GiTrophyCup className="text-xl text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-black">{rank}</p>
                    <p className="text-sm text-gray-500">Your Rank</p>
                  </div>
                </div>

                {/* Percentile Column */}
                <div className="text-center flex-1 border-r-2 pr-4  ml-6  flex items-center">
                  <div className="bg-gray-200 w-10 h-10 flex items-center justify-center mr-4 rounded-full">
                    <PiNotepadDuotone className="text-xl text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-black">{percentile}</p>
                    <p className="text-sm text-gray-500">Percentile</p>
                  </div>
                </div>

                {/* Correct Answers Column */}
                <div className="text-center flex-1 border-r-2 pr-4  ml-6  flex items-center">
                  <div className="bg-gray-200 w-10 h-10 flex items-center justify-center mr-4 rounded-full">
                    <FcApproval className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-black">{score} / 15</p>
                    <p className="text-sm text-gray-500">Correct Answers</p>
                  </div>
                </div>
              </div>
    </>
  )
}

export default QuickStastics
