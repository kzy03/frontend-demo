import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavigateBack = () => {
    const navigate = useNavigate();
  return (
    <div
      className="text-purple-900 flex mb-3 text- align-center select-none inline p-1 w-20 hover:text-gray-400"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft /> Back
    </div>
  );
};

export {NavigateBack}