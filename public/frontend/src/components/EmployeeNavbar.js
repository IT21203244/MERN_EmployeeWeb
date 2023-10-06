import SidebarImage from '../images/home1.ico'
import SidebarImage1 from '../images/employee1.ico'
import SidebarImage2 from '../images/inventory1.png'
import SidebarImage3 from '../images/delivery1.ico'
import SidebarImage4 from '../images/settings1.ico'
import SidebarImage5 from '../images/settings.png'
import SidebarProfile from '../images/sideprofile.png'
import SidebarLout from '../images/logout.png'

const EmployeeNavbar = () => {

    return (
        <header>
            <div className="container">
                   
                    <span className="cname">
                        <h3>AutoForce</h3>
                    </span>
                    
                    <ul className="nav-link">
                        <li>
                            <a href="/">
                                <div className="navimg">  
                                    <img src={SidebarImage} alt="home"/>
                                    <span className="sbmenu">Home</span>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                <div className="navimg">
                                    <img src={SidebarImage1} alt="emp"/>
                                    <span className="sbmenu">Employee M. System</span>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                <div className="navimg">
                                    <img src={SidebarImage2} alt="inv"/>    
                                    <span className="sbmenu">Inventory M. System</span>
                                </div>
                                
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                <div className="navimg">
                                    <img src={SidebarImage3} alt="del"/>
                                    <span className="sbmenu">Delivery M. System</span>
                                </div>
                               
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                <div className="navimg">
                                    <img src={SidebarImage4} alt="res"/>
                                    <span className="sbmenu">S&R M. System</span>
                                </div>
                                
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                <div className="navimg">
                                    <img src={SidebarImage5} alt="sett"/>
                                    <span className="sbmenu">Settings</span>
                                </div>
                                
                            </a>
                        </li>
                    </ul>  

                    <ul>
                        <li>
                            <div className="profile-details">
                                <div className="profile-content">
                                    <img src={SidebarProfile} alt="pimage"/>
                                </div>
                                    <div className="name-job">
                                        <div className="profile-name">J Dias</div>
                                        <div className="job">Web Designer</div>
                                    </div>
                                    
                                        <img src={SidebarLout} alt="logout"/>
                                    
                            </div>
                        </li>
                    </ul>

                    
            </div>
        </header>
    )
}

export default EmployeeNavbar