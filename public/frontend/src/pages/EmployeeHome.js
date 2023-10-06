import bimg1 from '../images/addp.png'
import bimg2 from '../images/listp.png'
import bimg3 from '../images/iledger.png'
import profile from '../images/avatar.png'
import droparrow from '../images/dropdown.png'

const EmployeeHome = () => {
    return (
        <div className="home">

            <div className='headbox'>
                <h3>Employee Management</h3>
            </div>
            

            <div className='buttonBox'>
                <button class="bu1"><a href="/EmployeeProfile">
                        <img src={bimg1} alt="addp"/>
                        <h4>Employee Profiles</h4>
                    </a></button>

                <button class="bu2"><a href="/SalaryCalculator">
                        <img src={bimg2} alt="listp"/>
                        <h4>Add Employee Salaries</h4>
                    </a></button>

                <button class="bu3"><a href="/EmployeeRegister">
                        <img src={bimg3} alt="ledgerp"/>
                        <h4>Register New Employees</h4>
                    </a></button>

                    <button class="bu4"><a href="/EmployeeS">
                        <img src={bimg3} alt="ledgerp"/>
                        <h4>Employee Salaries</h4>
                    </a></button>

                    <button class="bu5"><a href="/EmployeeAttendance">
                        <img src={bimg3} alt="ledgerp"/>
                        <h4>Attendance</h4>
                    </a></button>

                    <button class="bu6"><a href="/EmployeeAttView">
                        <img src={bimg3} alt="ledgerp"/>
                        <h4>EmployeeAttendance</h4>
                    </a></button>
            </div>

            <div class="profile">
                <div class="avatar">
                    <img src={profile} alt="avatar"/>
                </div>
                <div class="dropdown">
                    <button class="dropbtn"><img src={droparrow} alt="darrow"/></button>
                    <div class="dropdown-content">
                        <a href="/">Employee Name</a>
                        <a href="/">Settings</a>
                        <a href="/">Logout</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EmployeeHome