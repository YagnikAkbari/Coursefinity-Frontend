import React, { useEffect, useState } from "react";
import { getInstructorDetails, getUserDetails } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const router = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    const getUser = async () => {
      try {
        const role =
          (await JSON.parse(localStorage.getItem("user") ?? "")?.role) ?? "";
        let response;
        if (role === "learner") {
          response = await getUserDetails();
        } else if (role === "instructor") {
          response = await getInstructorDetails();
        }
        const user = response.body.data;

        setProfileData(user);
      } catch (err) {
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
