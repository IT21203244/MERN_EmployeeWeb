import { useRef } from 'react'
import { useEmployeeContext } from '../hooks/useEmployeeContext'
import myimage from "../images/s001.png"
import { Link } from "react-router-dom"

import  {useReactToPrint} from 'react-to-print'

const EmployeeDetails = ({ employee }) => {
    const { dispatch } = useEmployeeContext()

    const componentPDF = useRef()

        const handleClick = async () => {
            const response = await fetch('/api/employee/' + employee._id, {
                method: 'DELETE'
            })


        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_EMPLOYEE', payload: json })
        }
    }

    const generatePDF = useReactToPrint({
        content: () => componentPDF.current, 
        documentTitle: "AutoForce Inventory Log",
        onAfterPrint: () => alert("Data Saved to PDF")
    })

    return (
        <div className="Employee-Details">

            <div ref = {componentPDF}>

            <h4>{employee.employeeid}</h4>
            <div className='eimage'>
                <p><strong></strong></p>
                <img src={myimage} alt="Uploaded "/>
            </div>
            <p><strong>Name :</strong>{employee.name}</p>
            <p><strong>Nic :</strong>{employee.nic}</p>
            <p><strong>Contact Number :</strong>{employee.phonenumber}</p>
            <p><strong>Email :</strong>{employee.email}</p>
            <p><strong>address :</strong>{employee.address}</p>
            </div>

            <div>
            <button className="pdfgen" onClick={ generatePDF } style={{width: 150, position:"absolute", top: 210, right:35, borderRadius: 5}}>Get PDF</button>
            </div>

            <Link to={"/update/"+employee._id}><span className="material-symbols-outlined" style={{position:"absolute", top:80, right:20}}>edit</span></Link>

            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default EmployeeDetails