import { Helmet } from "react-helmet";

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
      <ErrorPage message={message} />
    </>
  );
}

export default ErrorPage;
