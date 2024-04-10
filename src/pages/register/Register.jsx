import MultiStep from "react-multistep";
import "./prog-track.css";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import "./styles.css";

const Register = () => {
  const steps = [
    { component: <StepOne /> },
    { component: <StepTwo /> },
    { component: <StepThree /> },
    { component: <StepFour /> },
  ];

  return (
    <div className="p-8 w-[500px] bg-slate-500">
      <div>
        <div>
          <MultiStep steps={steps} />
        </div>
      </div>
    </div>
  );
};

export default Register;