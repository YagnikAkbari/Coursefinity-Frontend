import { Link } from "react-router-dom";

function ErrorPage({ message }) {
  return (
    <div className="h-[100dvh] flex items-center justify-center flex-col">
      <h1 className="text-center text-[5rem] tracking-widest font-extrabold">
        404
      </h1>
      <p className="text-center text-3xl ">{message}</p>
      <Link
        to="/"
        className="bg-primary-600 text-white py-2 px-3 rounded-md mt-6 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 hover:ring-2 hover:ring-primary-500 hover:ring-offset-1"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default ErrorPage;
