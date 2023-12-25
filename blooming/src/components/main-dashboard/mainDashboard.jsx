import AdminPic from '../../assets/admin-pic.jpg'
import './mainDashboard.css'

const mainDashboard = () => {
    return (
        <div className='main-dashboard-admin'>
            <div className="form-dashboard">
                <form>
                    <h1>Login</h1>
                    <div className="input-container">
                        <label>Email</label>
                        <input type="email" name="email" required />

                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="password" required />
                    </div>
                    <div className="button-container">
                        <button type="submit" className="btn">Login</button>
                    </div>
                </form>
            </div>
        </div>
        //   <div className="admin-picture">
        //         <img src={AdminPic} className='admin-pic-class' />
        //     </div> 
    )
}

export default mainDashboard

