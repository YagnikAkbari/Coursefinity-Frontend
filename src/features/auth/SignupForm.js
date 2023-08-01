import React from "react";
import { Link, Form, useSearchParams } from "react-router-dom";

import image1 from "../../assets/Background.png";
import googleIcon from "../../assets/icons/i-google.svg";
import logo from "../../assets/Logo.svg";
import { registerUser } from "../../services/apiAuth";
import Button from "../ui/Button";
import RoleSelection from "../ui/RoleSelection";

import classes from "./styles/SignupForm.module.css";

const SignupForm = () => {
  const [searchParams] = useSearchParams("instructor");
  const isActive = searchParams.get("mode");

  return (
    <div
      id={classes.form}
      className="grid grid-cols-2 grid-rows-6 w-[100vw] h-screen bg-white"
    >
      <Link
        to="/"
        className="flex items-center space-x-4 h-fit mt-5 ml-20 row-span-1"
      >
        <img src={logo} alt="Coursefinity" className="w-12 h-12" />
        <span className="font-black capitalize text-xl">coursefinity</span>
      </Link>
      <div className="relative flex items-center row-span-6">
        <h1
          className="absolute capitalize font-extrabold text-[5rem] px-20"
          id={classes["main-heading"]}
        >
          The Best
          <br />
          digital
          <br />
          platform
          <br />
          learning
          <br />
          experience
        </h1>
        <img src={image1} alt="background" className="h-screen w-full" />
      </div>
      <div className="flex flex-col m-auto w-[24rem] row-span-5">
        <h2 className="font-bold text-[1.5rem] leading-[1.8rem]">
          Create your coursefinity account
        </h2>
        <p className="mt-[0.35rem]">
          Already have an account?
          <span>
            <Link
              to={`/auth/signin?mode=${
                isActive === "learner" ? "learner" : "instructor"
              }`}
              className="text-primary-700"
            >
              {" "}
              Login
            </Link>
          </span>
        </p>
        <Form method="post">
          <RoleSelection isActive={isActive} />
          <div className="flex justify-between mt-[2rem]">
            <input
              type="text"
              name="name"
              className="w-[49%] bg-[#f7f7f7] rounded-[0.4rem] p-[0.8rem] border-0 focus:ring-0"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className="w-[49%] bg-[#f7f7f7] rounded-[0.4rem] p-[0.8rem] border-0 focus:ring-0"
              placeholder="Email"
            />
          </div>
          <input
            type="password"
            name="password"
            className="w-full bg-[#f7f7f7] rounded-[0.4rem] p-[0.8rem] mt-[1.2rem] border-0 focus:ring-0"
            placeholder="Password"
          />
          <Button type="submit" className="mt-[2rem]">
            Sign-up
          </Button>
          <div className={classes.divider}>or</div>
          <button className="w-full flex items-center justify-center border-[1px] border-[#BDBDBD] rounded-[0.4rem] p-[.8rem] gap-2 mt-5">
            <span>
              <img src={googleIcon} alt="google" />
            </span>
            Sign-up using google
          </button>
        </Form>
      </div>
    </div>
  );
};

export async function action({ request }) {
  const data = await request.formData();
  const searchParams = new URL(request.url).searchParams;
  const requestUrl = searchParams.get("mode") || "learner";

  const registerData = {
    name: data.get("name"),
    email: data.get("email"),
    password: data.get("password"),
  };
  const response = await registerUser(registerData, requestUrl);

  return response;
}

export default SignupForm;
