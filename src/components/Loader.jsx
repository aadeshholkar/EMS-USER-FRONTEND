import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <ClipLoader size={45} color="#3b82f6" />
      <p className="mt-3 text-sm text-gray-500">{message}</p>
    </div>
  );
};

export default Loader;
