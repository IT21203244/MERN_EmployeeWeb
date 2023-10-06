import { useState } from "react"
import { useEmployeeContext } from "../hooks/useEmployeeContext"

const EmployeeAt = () => {
    const {dispatch} = useEmployeeContext()
    const [employeeid, setEmployeeId] = useState('')
    const [month, setMonth] = useState('')
    const [date, setDate] = useState('')
    const [timein, setTimeIn] = useState('')
    const [timeout, setTimeOut] = useState('')
    const [error, setError] = useState(null)
    const [emptyfields, setEmptyFields]= useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const employee = {employeeid, month, date, timein, timeout}

        const response = await fetch('/api/employeeattend', {
            method: 'POST', 
            body: JSON.stringify(employee),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            if (json.emptyfields) {
                setEmptyFields(json.emptyfields)
            } else {
                setEmptyFields([])
            }
        }
        if(response.ok) {
            setEmployeeId('')
            setMonth('')
            setDate('')
            setTimeIn('')
            setTimeOut('')
            setError(null)
            setEmptyFields([])
            console.log('Attendance Recorded', json)
            dispatch ({type: 'ATTENDANCE_RECORDING', payload: json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <div className="form-head">
                <h3>Register Employee</h3>
            </div>
          
                <label>EmployeeID</label>
                <input 
                    type="text"
                    onChange={(e) => setEmployeeId(e.target.value)}
                    value={employeeid}
                    className={emptyfields && emptyfields.includes('employeeid') ? 'error' : ''}
                />

                <label>Month</label>
                <input 
                    type="text"
                    onChange={(e) => setMonth(e.target.value)}
                    value={month}
                    className={emptyfields && emptyfields.includes('month') ? 'error' : ''}
                />

                <label>Date</label>
                <input 
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    className={emptyfields && emptyfields.includes('date') ? 'error' : ''}
                />

                <label>TimeIn</label>
                <input 
                   type="time"
                    onChange={(e) => setTimeIn(e.target.value)}
                    value={timein}
                    className={emptyfields && emptyfields.includes('timein') ? 'error' : ''}
                />

                <label>TimeOut</label>
                <input 
                type="time"
                onChange={(e) => setTimeOut(e.target.value)}
                value={timeout}
                className={emptyfields && emptyfields.includes('timeout') ? 'error' : ''}
                />

            <button>ADD</button>    
            {error && <div className="error">{error}</div>}
            <button className="just">A</button>   
        </form>
    )
}

export default EmployeeAt
