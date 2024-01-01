import MainDashboard from "../../components/main-dashboard/mainDashboard.jsx";
import SideBar from "../../components/sidebar/sidebar.jsx";
import { useAuthContext } from "../../hooks/useAuthContext.jsx";

const AdminPage = () => {
  const { admin } = useAuthContext();
  return (
    <div className="admin-main-page">
      {/* if the admin is logged-in show me only the sidebar */}
      {admin && <SideBar />}
      {/* if the admin is not logged in yet show me only the dashboard */}
      {!admin && <MainDashboard />}
    </div>
  );
};
{
  /* only when we have a user (logged in) show me the logout button */
}
// {admin && (
//   <div className="logout-container">
//     <span>{admin.user}</span>
//     <button onClick={handleClick} className="logout">
//       <img src={Logout} />
//     </button>
//   </div>
// )}

export default AdminPage;
