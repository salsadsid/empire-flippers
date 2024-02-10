import { Textarea, Typography } from "@material-tailwind/react";
import { Input } from "postcss";
import React from "react";

const Step8 = () => {
  return (
    <div className="max-w-full mt-12 flex flex-col items-center gap-5">
      <Typography variant="paragraph" className="font-bold text-xl">
        {" "}
        How did you hear about us?
      </Typography>
      <Typography variant="paragraph" className="font-medium text-xl">
        {" "}
        Share your experience with motioninvest
      </Typography>
      <div className="w-1/2">
        <Textarea label="Message" />
      </div>
    </div>
  );
};

export default Step8;
