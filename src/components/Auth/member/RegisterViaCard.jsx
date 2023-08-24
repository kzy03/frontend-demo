import React from "react";
import { Link } from "react-router-dom";
import LogoOne from "../../../assets/LogoOne";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import Input from "../../ui/Input";
import { NavigateBack } from "../../ui/Navigators";

const RegisterViaCard = () => {
  return (
    <Card className="mt-14">
      < NavigateBack/>
      <LogoOne className="m-auto mb-3" />
      <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 text-center">
        City Rewards
      </h5>
      <Input label="Enter Card Number Below" type="tel" placeholder="xxxx-xxxx-xxxx-xxxx" className="mb-3"/>
      <Button text="Next"/>
    </Card>
  );
};

export default RegisterViaCard;
