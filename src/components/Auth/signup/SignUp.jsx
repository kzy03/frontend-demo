import React from "react";
import Card from "../../ui/Card";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { NavigateBack } from "../../ui/Navigators";

const SignUp = () => {
  return (
    <Card className="mt-14">
      <NavigateBack />
      <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 ">
          Sign Up to our platform
        </h5>
        <Input label="Your Email" type="email" />
        <Input label="Your Password" type="password" />

        <label
          htmlFor="option"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Select Options
        </label>
        <select
          id="option"
          className="block mb-3 w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
        >
          <option selected>Select Sign Up Options</option>
          <option value="US">Old NRC</option>
          <option value="CA">NRC</option>
          <option value="FR">Phone Number</option>
        </select>
        <Button text="GET OTP" />
      </form>
    </Card>
  );
};

export default SignUp;
