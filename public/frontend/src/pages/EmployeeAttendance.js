// component
import EmployeeAt from "../components/EmployeeAt"

import profile from '../images/avatar.png'
import droparrow from '../images/dropdown.png'

const EmployeeAttendance = () => {

    return (
        <div className="home2">
            <div className="EmployeeProfile">
                <div className='headbox'>
                <h3>Employee Management</h3>
                </div>
            </div>
            
            <EmployeeAt/>
            
        </div>
    )
}

export default EmployeeAttendance