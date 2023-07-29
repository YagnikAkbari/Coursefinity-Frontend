import React from "react";
import { Link, useFetcher } from "react-router-dom";
import logo from "../../assets/Logo.svg";

import DropDown from "../ui/DropDown";
import { useSelector } from "react-redux";

const MainNavbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const fetcher = useFetcher();

  return (
    <div className="flex bg-white items-center py-3 justify-between px-5 text-black text-base font-bold sticky top-0 z-50">
      <Link to="/">
        <img
          src={logo}
          alt="Coursefinity"
          className="w-12 h-12 cursor-pointer"
        />
      </Link>
      <div>
        <DropDown
          main="developement"
          subHeading={"popular programs"}
          subMenu={[
            "Full Stack development",
            "IOS development",
            "React",
            "Java developer",
            "Blockchain developer",
          ]}
        />
        <DropDown
          main="design"
          subHeading={"designer programs"}
          subMenu={[
            "UI/UX designer",
            "Adobe XD",
            "Adove primier pro",
            "Blender",
          ]}
        />
        <DropDown
          main="Machine learning"
          subHeading={"python programs"}
          subMenu={[
            "Data analysis",
            "Data visualization",
            "Django",
            "python crash course",
          ]}
        />
      </div>
      {!isAuthenticated && (
        <div>
          <Link className="px-5" to="auth/signin?mode=learner">
            Sign in
          </Link>
          <Link
            className="px-5 text-purple-700 border-primary-700 border-2 rounded-[4px] p-[1rem]"
            to="auth/signup?mode=learner"
          >
            Get started
          </Link>
        </div>
      )}
      {isAuthenticated && (
        <fetcher.Form method="post" action="/logout">
          <button className="px-5 py-2 bg-primary-700 rounded-lg text-white">
            Logout
          </button>
        </fetcher.Form>
      )}
    </div>
  );
};

export default MainNavbar;
