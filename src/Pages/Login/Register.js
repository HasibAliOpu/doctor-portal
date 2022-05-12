import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="mt-12">
      <div className="w-full max-w-sm p-6 m-auto bg-cyan-300 rounded-md shadow-xl ">
        <h1 className="text-3xl font-semibold text-center text-slate-700 ">
          Register Now!!
        </h1>

        <form className="mt-6">
          <div>
            <input
              type="text"
              placeholder="Username"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-4">
            <input
              type="password"
              placeholder="Password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Register
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b border-gray-700 lg:w-1/5"></span>

          <Link
            to="/"
            className="text-xs text-center text-gray-700 hover:underline"
          >
            or Register with Social Media
          </Link>

          <span className="w-1/5 border-b border-gray-700 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <button
            type="button"
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          >
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign Up with Google</span>
          </button>
        </div>

        <p className="mt-8 text-xs  text-center text-gray-700">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-gray-700  hover:underline"
          >
            go login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
