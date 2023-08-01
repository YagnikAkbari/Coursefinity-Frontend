import { Helmet } from "react-helmet";
import ResetPassword from "../features/auth/components/ResetPassword";
import ResetEmail from "../features/auth/components/ResetEmail";

function ResetPaswordPage() {
  return (
    <>
      <Helmet>
        <title>Reset Password</title>
        <meta
          name="description"
          content="coursefinity are here to meet indian educators with the student from every corner of india"
        />
      </Helmet>
      {/* <ResetPassword /> */}
      <ResetEmail />
    </>
  );
}

export default ResetPaswordPage;
