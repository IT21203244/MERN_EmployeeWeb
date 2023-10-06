import { useEffect, useState } from "react"

//components
import EmployeeSalary from '../components/EmployeeSalary'

const EmployeeS = () => {
    const[employeesalary, setEmployeeSalary]= useState(null)

    useEffect(() => {
        const fetchEmployeesalaries = async () => {
            const response = await fetch('/api/employeesalary')
            const json = await response.json()

            if (response.ok){
                setEmployeeSalary(json)
            }
        }

        fetchEmployeesalaries()
    }, [])

    
    return (
        <div className="EmployeeProfile">
            <div className='headbox'>
                <h3>Employee Management</h3>
            </div>


            <div className="Ëmployee">
                {employeesalary && employeesalary.map((employeesalary) =>(
                    <EmployeeSalary key={employeesalary._id} employeesalary={employeesalary}/>

                ))}

            </div>

            

        </div>
    )
}

export default EmployeeS