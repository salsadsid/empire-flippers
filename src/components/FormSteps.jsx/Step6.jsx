import { Input, Typography } from "@material-tailwind/react";
import React from "react";

const Step6 = () => {
  return (
    <div className="max-w-full mt-12 flex flex-col items-center gap-5">
      <Typography variant="paragraph" className="font-bold text-xl">
        {" "}
        INCOME PROOF
      </Typography>
      <Typography variant="paragraph" className="font-medium text-xl">
        {" "}
        What is your sites average monthly profit over the last 6 months?
      </Typography>
      <div className="w-1/2">
        <Input label="Average monthly profit" className="w-1/2" />
      </div>

      <div className="max-w-xl">
        <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
          <span className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span className="font-medium text-gray-600">
              Drop files to Attach, or
              <span className="text-blue-600 underline">browse</span>
            </span>
          </span>
          <input type="file" name="file_upload" className="hidden" />
        </label>
      </div>
    </div>
  );
};

export default Step6;
