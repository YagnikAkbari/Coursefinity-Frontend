import React, { useEffect, useState } from "react";
import { getInstructorDetails, getUserDetails } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    const getUser = async () => {
      try {
        let data = localStorage.getItem("user") ?? '{"role":"INVALID"}';
        const role = JSON.parse(data)?.role ?? null;

        if (role === "INVALID") {
          navigate("/auth/signin?mode=learner");
        }
        let response;
        if (role === "learner") {
          response = await getUserDetails();
        } else if (role === "instructor") {
          response = await getInstructorDetails();
        }
        const user = response?.data ?? {};

        setProfileData(user);
      } catch (err) {
        if (err?.response?.status === 404) {
          navigate("/auth/signin?mode=learner");
        }
        if (err?.response?.status === 500) {
          navigate("/error");
        }
        console.error("Errot Get Purchased Courses:-", err);
      } finally {
        setIsLoading(false);
      }
    };
    getUser();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div>name: {profileData?.name ?? "-"}</div>
          <div>email: {profileData?.email ?? "-"}</div>
        </div>
      )}
    </div>
  );
};

export default Profile;
