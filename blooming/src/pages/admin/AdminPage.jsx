import MainDashboard from "../../components/main-dashboard/mainDashboard.jsx";
import SideBar from "../../components/sidebar/sidebar.jsx";
import { useAuthContext } from "../../hooks/useAuthContext.jsx";
import { useValue } from "../../context/googleAuthContext.jsx";

const AdminPage = () => {
  const {value} = useValue()
  const { admin } = useAuthContext();
  return (
    <div className="admin-main-page">
      {/* if the admin is logged-in show me only the sidebar */}
      {value || admin ? (
        <SideBar />
      ) : (
        // {/* if the admin is not logged in yet show me only the dashboard */}
        <MainDashboard />
      )}
    </div>
  );
};

export default AdminPage;
