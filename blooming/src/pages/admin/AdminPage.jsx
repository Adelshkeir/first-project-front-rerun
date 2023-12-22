import MainDashboard from '../../components/main-dashboard/mainDashboard.jsx'
import SideBar from '../../components/sidebar/sidebar.jsx'


const AdminPage = () => {
  return (
    <div className='admin-main-page'>
        <SideBar/>
        <MainDashboard/>
    </div>
  )
}

export default AdminPage