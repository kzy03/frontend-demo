import React from "react";
import Card from "../../ui/Card";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { NavigateBack } from "../../ui/Navigators";

const SignIn = () => {
  return (
    <Card className="mt-14">
      <NavigateBack />
      <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900">
          Sign in to our platform
        </h5>
        <Input
          label="Your Email"
          type="email"
          placeholder="example123@gmail.com"
        />
        <Input label="Your Password" type="password" placeholder="******" />
        <div className="flex">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              Remember me
            </label>
          </div>
          <Link
            to="/forgot-password"
            className="ml-auto text-sm text-purple-800 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        <Button text="Login to your account" />

        <div className="text-sm font-medium text-gray-500">
          Not registered?{" "}
          <Link to="/signUp" className="text-purple-800 hover:underline">
            Create account
          </Link>
        </div>
      </form>
    </Card>
  );
};

export default SignIn;
