import React from "react";
import Card from "../../ui/Card";
import Button from "../../ui/Button";
import LogoOne from "../../../assets/LogoOne";
import { Link } from "react-router-dom";
import { NavigateBack } from "../../ui/Navigators";

const Member = () => {
  return (
    <Card className="mt-14">
      <NavigateBack />
      <LogoOne className="m-auto mb-5" />
      <h5 className="mb-8 text-center text-2xl font-bold tracking-tight text-gray-900">
        City Rewards
      </h5>
      <Link to="/signIn">
        <Button className="mb-3" text="SIGN IN" />
      </Link>
      <Link to="/register-via-card">
        <Button text="REGISTER VIA CARD" vibrant="outline"/>
      </Link>
    </Card>
  );
};

export default Member;
