import React from "react";

import { Input, Typography } from "@material-tailwind/react";

const Step4 = () => {
  return (
    <div className="max-w-full mt-12 flex flex-col items-center gap-5">
      <Typography variant="paragraph" className="font-bold text-xl">
        {" "}
        WHAT IS YOUR URL?
      </Typography>
      <Typography variant="paragraph" className="font-medium text-xl">
        {" "}
        Let us check out your website!
      </Typography>
      <div className="w-1/2">
        <Input label="Website URL" className="w-1/2" />
      </div>
    </div>
  );
};

export default Step4;
