import React from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import { HomeIcon, CogIcon, UserIcon } from "@heroicons/react/24/outline";
import Step1 from "../../components/FormSteps.jsx/Step1";
import Step2 from "../../components/FormSteps.jsx/Step2";
import Step3 from "../../components/FormSteps.jsx/Step3";
import Step4 from "../../components/FormSteps.jsx/Step4";
import Step5 from "../../components/FormSteps.jsx/Step5";
import Step6 from "../../components/FormSteps.jsx/Step6";
import Step7 from "../../components/FormSteps.jsx/Step7";
import Step8 from "../../components/FormSteps.jsx/Step8";

const SellForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Step1 />;

      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      case 3:
        return <Step4 />;
      case 4:
        return <Step5 />;
      case 5:
        return <Step6 />;
      case 6:
        return <Step7 />;
      case 7:
        return <Step8 />;
      default:
        return "unknown step";
    }
  }
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  return (
    <div className="w-3/4 mt-16 mx-auto py-4 px-8">
      <Typography variant="h3" className="text-center">
        Evaluate your sites worth!
      </Typography>
      <Typography variant="paragraph" className="text-center mt-4 mb-20">
        Submit your site to be evaluated by our team. Instant valuation on your
        site, easy & free!
      </Typography>
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>1</Step>
        <Step onClick={() => setActiveStep(1)}>2</Step>
        <Step onClick={() => setActiveStep(2)}>3</Step>
        <Step onClick={() => setActiveStep(3)}>4</Step>
        <Step onClick={() => setActiveStep(4)}>5</Step>
        <Step onClick={() => setActiveStep(5)}>6</Step>
        <Step onClick={() => setActiveStep(6)}>7</Step>
        <Step onClick={() => setActiveStep(7)}>8</Step>
      </Stepper>
      {getStepContent(activeStep)}
      <div className="mt-16 flex justify-center gap-4">
        {activeStep !== 0 && (
          <Button onClick={handlePrev} disabled={isFirstStep}>
            Prev
          </Button>
        )}
        <Button onClick={handleNext}>
          {activeStep === 7 ? `Submit` : `Next`}
        </Button>
      </div>
    </div>
  );
};

export default SellForm;
