import MainDashboard from "../../components/main-dashboard/mainDashboard.jsx";
import SideBar from "../../components/sidebar/sidebar.jsx";
import { useAuthContext } from "../../hooks/useAuthContext.jsx";
import { auth, provider } from "../../components/googleSignIn/config.jsx";
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";

const AdminPage = () => {
  const [value, setValue] = useState();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  const { admin } = useAuthContext();
  return (
    <div className="admin-main-page">
      {/* if the admin is logged-in show me only the sidebar */}
      {value || admin ? (
        <SideBar />
      ) : (
        // {/* if the admin is not logged in yet show me only the dashboard */}
        <>
          <MainDashboard handleClick={handleClick} />
        </>
      )}
    </div>
  );
};
  

export default AdminPage;
