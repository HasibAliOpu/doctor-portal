import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../../Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );
  const onSubmit = async (data) => {
    console.log(data);
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-3xl text-orange-300 text-center py-3 ">
        Add a New Doctor
      </h1>
      <div className="flex justify-center items-center ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
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
              <div className="form-control w-full max-w-xs relative">
                <label className="label">
                  <span className="label-text">Specialty</span>
                </label>
                <select className="select select-bordered w-full max-w-xs">
                  {services.map((s) => (
                    <option key={s._id}>{s.name}</option>
                  ))}
                </select>

                <label className="label">
                  {errors.specialty?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.specialty?.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="btn w-full max-w-xs text-white"
                type="submit"
                value="Register"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
