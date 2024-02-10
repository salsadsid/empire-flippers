import { Typography, Input } from "@material-tailwind/react";
import React from "react";

const Step2 = () => {
  return (
    <div className="max-w-full mt-12 flex flex-col items-center gap-5">
      <Typography variant="paragraph" className="font-bold text-xl">
        {" "}
        NAME OF SELLER
      </Typography>
      <Typography variant="paragraph" className="font-medium text-xl">
        {" "}
        Let us know your first & last name
      </Typography>

      <div className="flex gap-5">
        <div className="w-1/2">
          <Input label="First Name" />
        </div>
        <div className="w-1/2">
          <Input label="Last Name" />
        </div>
      </div>
    </div>
  );
};

export default Step2;
