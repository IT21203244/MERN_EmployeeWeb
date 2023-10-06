import { useState } from "react"
import { useEmployeeContext } from "../hooks/useEmployeeContext"

const EmployeeRegister = () => {
    const {dispatch} = useEmployeeContext()

    const [epimage, setEImage] = useState('')
    const [name, setName] = useState('')
    const [employeeid, setEmployeeId] = useState('')
    const [role, setRole] = useState('')
    const [password, setPassword] = useState('')
    const [nic, setNic] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhoneNumber] = useState('')
    const [birthdate, setBirthDate] = useState('')
    const [hiredate, setHireDate] = useState('')

    const [error, setError] = useState(null)
    const [emptyfields, setEmptyFields]= useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const employee = {epimage, name, employeeid, role, password, nic, address, email, phonenumber, birthdate, hiredate}

        const response = await fetch('/api/employee', {
            method: 'POST', 
            body: JSON.stringify(employee),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyfields)
        }
        if(response.ok) {
            setEImage('')
            setName('')
            setEmployeeId('')
            setRole('')
            setPassword('')
            setNic('')
            setAddress('')
            setEmail('')
            setPhoneNumber('')
            setBirthDate('')
            setHireDate('')
            setError(null)
            setEmptyFields([])
            console.log('New Employee Registered', json)
            dispatch ({type: 'CREATE_EMPLOYEES', payload: json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <div className="form-head">
                <h3>Register Employee</h3>
            </div>

                <div className="label1">
                    <label>Employee Image</label>
                    <input 
                        type="file"
                        onChange={(e) => setEImage(e.target.value)}
                        value={epimage}
                        accept="image/*"
                        className={emptyfields.includes('epimage') ? 'error' : ''}
                    />
                </div>

                <label>Name</label>
                <input 
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className={emptyfields.includes('name') ? 'error' : ''}
                />
            
                <label>EmployeeID</label>
                <input 
                    type="text"
                    onChange={(e) => setEmployeeId(e.target.value)}
                    value={employeeid}
                    className={emptyfields.includes('employeeid') ? 'error' : ''}
                />

                <label>Role</label>
                <input 
                    type="text"
                    onChange={(e) => setRole(e.target.value)}
                    value={role}
                    className={emptyfields.includes('role') ? 'error' : ''}
                />

                <label>Password</label>
                <input 
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className={emptyfields.includes('password') ? 'error' : ''}
                />

                
                <label>NIC</label>
                <input
                    type="text"
                    onChange={(e) => setNic(e.target.value)}
                    value={nic}
                    className={emptyfields.includes('nic') ? 'error' : ''}
                />

                
                <label>Address</label>
                <input 
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    className={emptyfields.includes('address') ? 'error' : ''}
                />

                
                <label>Email</label>
                <input 
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={emptyfields.includes('email') ? 'error' : ''}
                />
                
                
                <label>Phone Number</label>
                <input 
                    type="text"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phonenumber}
                    className={emptyfields.includes('phonenumber') ? 'error' : ''}
                />

                
                <label>BirthDate</label>
                <input 
                    type="date"
                    onChange={(e) => setBirthDate(e.target.value)}
                    value={birthdate}
                    className={emptyfields.includes('birthdate') ? 'error' : ''}
                />

                <label>HireDate</label>
                <input 
                    type="date"
                    onChange={(e) => setHireDate(e.target.value)}
                    value={hiredate}
                    className={emptyfields.includes('hiredate') ? 'error' : ''}
                />


                

            <button>ADD</button>    
            {error && <div className="error">{error}</div>}

            <button className="just">A</button>   
           
            
            
        </form>
        
    )
}

export default EmployeeRegister