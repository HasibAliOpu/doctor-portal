import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Loading";

import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  const handleResetPassword = (e) => {
    const email = emailRef.current.value;
    const email2 = e.target.email.value;
    console.log(email, email2);
  };
  if (googleLoading || loading) {
    return <Loading />;
  }
  if (error || googleError) {
    toast(googleError?.message || error?.message);
  }
  if (user || googleUser) {
    navigate(from, { replace: true });
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                ref={emailRef}
                name="email"
                placeholder="your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <span className="flex justify-center">
              <button
                onClick={handleResetPassword}
                className="btn btn-link text-xs"
              >
                Forget Password
              </button>
            </span>
            <input
              className="btn w-full max-w-xs text-white"
              type="submit"
              value="Login"
            />
          </form>
          <p className="font-bold text-sm text-center">
            New to doctors portal?{" "}
            <Link className="text-secondary" to="/register">
              Create New Account
            </Link>
          </p>
          <div className="divider">OR</div>

          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
