import { Helmet } from "react-helmet";
import ErrorPages from "../features/ErrorPages";

function ErrorPage({ message = "something went wrong." }) {
  return (
    <>
      <Helmet>
        <title>404 - Coursefinity</title>
        <meta
          name="description"
          content="coursefinity are here to meet indian educators with the student from every corner of india"
        />
      </Helmet>
      <ErrorPages message={message} />
    </>
  );
}

export default ErrorPage;
