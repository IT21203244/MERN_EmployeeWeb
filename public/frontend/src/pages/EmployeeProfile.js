import { useEffect, useState } from "react"

//components
import EmployeeDetails from '../components/EmployeeDetails'


const EmployeeProfile = () => {
    const[employees, setEmployees]= useState(null)

    useEffect(() => {
        const fetchEmployees = async () => {
            const response = await fetch('/api/employee')
            const json = await response.json()

            if (response.ok){
                setEmployees(json)
            }
        }

        fetchEmployees()
    }, [])

    
    return (
        <div className="EmployeeProfile">
            <div className='headbox'>
                <h3>Employee Management</h3>
            </div>


            <div className="Ëmployee">
                {employees && employees.map((employee) =>(
                    <EmployeeDetails key={employee._id} employee={employee}/>

                ))}

            </div>

            

        </div>
    )
}

export default EmployeeProfile