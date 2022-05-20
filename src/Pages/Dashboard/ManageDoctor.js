import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import Loading from "../../Loading";
import ConfirmToast from "../../Toast/ConfirmToast";

const ManageDoctor = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const handleDelete = (email) => {
    const url = `http://localhost:5000/doctor/${email}`;
    ConfirmToast(url, refetch);
  };

  return (
    <div>
      <h1 className="text-2xl text-sky-400 text-center my-3">
        Manage Doctors : {doctors.length}
      </h1>
      <div className="overflow-x-auto w-full my-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>no.</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doc, index) => (
              <tr key={doc._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={doc.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{doc.name}</div>
                </td>

                <td>{doc.specialty}</td>
                <th>
                  <button
                    onClick={() => handleDelete(doc.email)}
                    className="btn  bg-red-500 hover:bg-red-600 border-none text-white btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>no.</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
