import axios from "axios";
import { useEffect, useState } from "react";
const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      (async () => {
        const { data } = await axios.get(
          `https://fathomless-temple-21605.herokuapp.com/admin/${email}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        setAdmin(data.admin);
        setAdminLoading(false);
      })();
    }
  }, [user]);
  return [admin, adminLoading];
};

export default useAdmin;
