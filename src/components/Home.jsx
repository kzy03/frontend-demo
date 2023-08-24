import React from "react";
import { Link } from "react-router-dom";
import Card from "./ui/Card";
import Button from "./ui/Button";
import LogoOne from "../assets/LogoOne";

const Home = () => {
  return (
    <Card className="mt-14">

      <LogoOne className="m-auto mb-5"/>

      <h5 className="mb-8 text-center text-2xl font-bold tracking-tight text-gray-900">
        City Rewards
      </h5>

      <div>   
        <Link to="/member" className="mb-3">
          <Button text="I'M A MEMBER" className="mb-3" />
        </Link>

        <Link to="/signUp" className="mb-3">
          <Button text="SIGN UP" vibrant="outline"/>
        </Link>
      </div>

    </Card>
  );
};

export default Home