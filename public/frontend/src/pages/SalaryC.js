// component
import SalaryCalculator from "../components/SalaryCalculator"

import profile from '../images/avatar.png'
import droparrow from '../images/dropdown.png'

const SalaryC = () => {

    return (
        <div className="home3">

            <div className='headbox'>
                <h3>Employee Management</h3>
            </div>

            <div className="head3">
                <h3>Employee Salaries</h3>
            </div>

           

            <SalaryCalculator/>
            
        </div>
    )
}

export default SalaryC