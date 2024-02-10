import React from "react";
import { Input, Typography } from "@material-tailwind/react";

const Step1 = ({}) => {
  return (
    <div className="max-w-full mt-12 flex flex-col items-center gap-5">
      <Typography variant="paragraph" className="font-bold text-xl">
        {" "}
        Email Address
      </Typography>
      <Typography variant="paragraph" className="font-medium text-xl">
        {" "}
        What is the best way to reach you ?
      </Typography>
      <div className="w-1/2">
        <Input label="Email" className="w-1/2" />
      </div>
    </div>
  );
};

export default Step1;
