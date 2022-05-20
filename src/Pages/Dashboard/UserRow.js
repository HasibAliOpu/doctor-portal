import React from "react";

import useToastify from "../../Toast/Toast";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const [Toast] = useToastify();
  // const handleModal = () => {
  //   Toast.fire({
  //     icon: "success",
  //     title: "Signed in successfully",
  //   });
  // };
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          Toast.fire({
            icon: "error",
            title: "Failed To make an Admin",
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Toast.fire({
            icon: "success",
            title: "Successfully made an Admin",
          });
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
