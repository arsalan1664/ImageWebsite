import { CornerDownLeft, CornerDownRight, Loader } from "lucide-react";
import React from "react";

// function Animated_Search() {
//   return (
//     <div className="my-2">
//       <div className="grid gap-8 items-start justify-center">
//         <div className="relative group">
//           <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
//           <button className="relative px-7 py- bg-neutral-950 rounded-full leading-none flex items-center w-96">
//             <span className=" text-gray-300 group-hover:text-gray-100 transition duration-200  w-80 h-full p-4">
//               Click here &rarr;
//             </span>
//             <Loader className="animate-spin text-white ml-2" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Animated_Search;

function Animated_Search() {
  return (
    <div className="my-2">
      <div className="grid gap-8 items-start justify-center">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative px-4 py- bg-neutral-950 rounded-full leading-none flex items-center max-w-96">
            <input
              className="border-none outline-none text-gray-300 group-hover:text-gray-100 transition duration-200  w-80 h-full p-4 bg-transparent"
              placeholder="Search Images"
            >
              {/* Click here &rarr; */}
            </input>
            <button>
              {/* <Loader className="animate-spin text-white ml-2" /> */}
              <CornerDownRight className=" text-gray-500 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animated_Search;
