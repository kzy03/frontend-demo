import React, { useState } from "react";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import { ChevronLeft } from "lucide-react";
import { NavigateBack } from "../../ui/Navigators";
import {
  PhoneRecovery,
  NrcRocovery,
  OldNrcRocovery,
  PassportRocovery,
} from "./RecoveryForms";

function ForgotPassword() {
  const [selectedOption, setSelectedOption] = useState("");
  const [step, setStep] = useState(1);
  const options = [
    {
      name: "MOBILE NUMBER",
      value: "number",
    },
    {
      name: "NRC",
      value: "nrc",
    },
    {
      name: "OLD-FORMAT NRC",
      value: "oldnrc",
    },
    {
      name: "PASSPORT",
      value: "passport",
    },
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNext = () => {
    if (selectedOption !== "") {
      setStep((prev) => prev + 1);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            {options.map((option) => (
              <div
                className="flex items-center pl-4 border border-gray-200 rounded mb-3"
                key={option.value}
              >
                <input
                  id={option.value}
                  type="radio"
                  value={option.value}
                  name="bordered-radio"
                  checked={selectedOption === option.value}
                  onChange={handleOptionChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor={option.value}
                  className="w-full py-4 ml-2 text-sm font-medium text-gray-900"
                >
                  {option.name}
                </label>
              </div>
            ))}
          </>
        );

      case 2:
        return selectedOption === "number" ? (
          <PhoneRecovery />
        ) : selectedOption === "nrc" ? (
          <NrcRocovery />
        ) : selectedOption === "oldnrc" ? (
          <OldNrcRocovery />
        ) : selectedOption === "passport" ? (
          <PassportRocovery />
        ) : (
          <PhoneRecovery />
        );

      default:
        return null;
    }
  };

  // Component
  return (
    <>
      <Card className="mt-14">
        {step == 1 && <NavigateBack />}
        {step == 2 && (
          <button className="p-1 w-10 border-1 border-gray-400 inline mb-5 bg-white" onClick={() => {setStep(1)}}>
            <ChevronLeft color="#000000" className="inline"/>
          </button>
        )}
        <h5 className="text-xl font-medium text-gray-900 mb-5">
          Forgot Password{" "}
        </h5>{" "}
        <form>
          {renderStepContent()}

          <Button
            type="button"
            onClick={handleNext}
            className="bg-purple-800 text-white w-full mt-5"
            text={step === 2 ? "GET OPT" : "Next"}
          />
        </form>
      </Card>
    </>
  );
}

export default ForgotPassword;
