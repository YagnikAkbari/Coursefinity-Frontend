import React from "react";
import { Helmet } from "react-helmet";
import Profile from "../features/profile/Profile";

const ProfilePage = () => {
  return (
    <>
      <Helmet>
        <title>Coursefinity | Profile</title>
        <meta
          name="description"
          content="coursefinity are here to meet indian educators with the student from every corner of india"
        />
      </Helmet>
      <Profile />
    </>
  );
};

export default ProfilePage;
