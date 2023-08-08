import React from "react";
import { Form, Link, redirect, useSearchParams } from "react-router-dom";

import logo from "../../assets/Logo.svg";

import { loginUser } from "../../services/apiAuth";
import { login } from "./auth-slice";

import RoleSelection from "../ui/RoleSelection";

import Button from "../ui/Button";

import classes from "./styles/SigninForm.module.css";
import store from "../../store/store";
import SuccessMessage from "../ui/SuccessMessage";

const SigninForm = () => {
  const [searchParams] = useSearchParams("instructor");
  const isActive = searchParams.get("mode");

  return (
    <div
      id={classes.form}
      className="grid grid-cols-2 grid-rows-6 w-[100vw] h-screen bg-white"
    >
      <Link
        to="/"
        className="flex items-center space-x-4 h-fit mt-5 ml-20 row-span-1 flex-1"
      >
        <img src={logo} alt="Coursefinity" className="w-12 h-12" />
        <span className="font-black capitalize text-xl">coursefinity</span>
      </Link>
      <div className="bg-black relative flex items-center row-span-6">
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
      </div>
      <div className="flex flex-col m-auto w-[24rem] row-span-5">
        <h2 className="font-bold text-[1.5rem] leading-[1.8rem]">
          Welcome back
        </h2>
        <Form method="post">
          <RoleSelection isActive={isActive} />
          <input
            type="email"
            name="email"
            className="w-full bg-[#f7f7f7] rounded-[0.4rem] p-[0.8rem] mt-[2rem] border-0 focus:ring-0"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            className="w-full bg-[#f7f7f7] rounded-[0.4rem] p-[0.8rem] mt-[1.2rem] border-0 focus:ring-0"
            placeholder="Password"
          />
          <h1 className="space-x-1 text-sm font-semibold mt-4 text-[#7D7D7D]">
            <span>Forgot your password?</span>
            <Link to="/reset-email" className="text-primary-700">
              Reset here
            </Link>
          </h1>
          <Button type="submit" className="mt-3">
            Log-in
          </Button>
        </Form>
        <div className="mt-10">
          <SuccessMessage content={"Password has been changed"} />
        </div>
      </div>
    </div>
  );
};

export default SigninForm;

export async function action({ request }) {
  const data = await request.formData();

  const searchParams = new URL(request.url).searchParams;
  const requestUrl = searchParams.get("mode") || "learner";

  const loginData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await loginUser(loginData, requestUrl);

  // console.log(response);
  window.localStorage.setItem("user", JSON.stringify(loginData));
  store.dispatch(login({ role: response.body.role }));
  return redirect("/");
}
