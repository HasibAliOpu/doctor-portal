import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center ">
        {/* <!-- Page content here --> */}
        <h1 className="text-3xl font-bold pt-5 text-purple-500">
          Welcome To you Dashboard
        </h1>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80  bg-sky-200 text-xl  text-sky-500 ">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link className="hover:bg-sky-500 hover:text-white" to="/dashboard">
              My Appointment
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-sky-500 hover:text-white"
              to="/dashboard/review"
            >
              My Review
            </Link>
          </li>
          {admin && (
            <>
              <li>
                <Link
                  className="hover:bg-sky-500 hover:text-white"
                  to="/dashboard/users"
                >
                  All Users
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-sky-500 hover:text-white"
                  to="/dashboard/addDoctor"
                >
                  Add a Doctor
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-sky-500 hover:text-white"
                  to="/dashboard/manageDoctor"
                >
                  Manage Doctor
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
