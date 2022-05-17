import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Loading";

const Users = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch("http://localhost:5000/users").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-3xl py-2 text-center text-secondary">User List</h1>
      <div className="overflow-x-auto ">
        <table className="table w-full">
          <thead>
            <tr>
              <th>no.</th>
              <th>User Email</th>
              <th>User Id</th>
            </tr>
          </thead>
          <tbody className="">
            {users.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>{user._id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
