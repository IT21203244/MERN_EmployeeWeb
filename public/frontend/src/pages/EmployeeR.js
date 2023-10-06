// component
import EmployeeRegister  from "../components/EmployeeRegister"

import profile from '../images/avatar.png'
import droparrow from '../images/dropdown.png'

const EmployeeR = () => {

    return (
        <div className="home2">
            <div className="EmployeeProfile">
                <div className='headbox'>
                <h3>Employee Management</h3>
                </div>
            </div>


           

            <EmployeeRegister/>
            
        </div>
    )
}

export default EmployeeR