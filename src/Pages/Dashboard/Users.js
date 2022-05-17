import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Loading";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
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
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={user._id}
                refetch={refetch}
                index={index}
                user={user}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
