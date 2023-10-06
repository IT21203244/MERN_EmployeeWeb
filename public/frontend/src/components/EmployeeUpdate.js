import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";



const EmployeeUpdate = () => {


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

    const params = useParams();

    const getSelectedEmployee = () => {
        axios.get(`/api/employee/${params.id}`)
          .then((response) => {
            console.log(response.data);
          //  setValues(response.data.data);
          //setItemimg(response.data.data.itemimg);
            setName(response.data.name)
            setEmployeeId(response.data.employeeid)
            setRole(response.data.role)
            setPassword(response.data.password)
            setNic(response.data.nic)
            setAddress(response.data.address)
            setEmail(response.data.email)
            setPhoneNumber(response.data.phonenumber)
            setBirthDate(response.data.birthdate)
            setHireDate(response.data.hiredate)
          })
      }

      useEffect(() => {
        getSelectedEmployee();
      },[]);

      const updateEmployeeDetails = async(e) => {
        e.preventDefault();
    
        let updateData = {
          name: name,
          employeeid: employeeid,
          role: role,
          password: password,
          nic: nic,
          address: address,
          email: email,
          phonenumber: phonenumber,
          birthdate: birthdate,
          hiredate: hiredate,
        }
    
        axios.put(`/api/employee/${params.id}`,updateData)
          .then((response) => {
            console.log("Updated Successfully");
           
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          })
      }

    return(
        <form className="create" onSubmit={updateEmployeeDetails}>
            <div className="form-head">
                <h3>Update Employee</h3>
            </div>

                <label>Name</label>
                <input 
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    
                />
            
                <label>EmployeeID</label>
                <input 
                    type="text"
                    onChange={(e) => setEmployeeId(e.target.value)}
                    value={employeeid}
                   
                />

                <label>Role</label>
                <input 
                    type="text"
                    onChange={(e) => setRole(e.target.value)}
                    value={role}
                   
                />

                <label>Password</label>
                <input 
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                   
                />

                
                <label>NIC</label>
                <input 
                    type="text"
                    onChange={(e) => setNic(e.target.value)}
                    value={nic}
                
                />

                
                <label>Address</label>
                <input 
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                 
                />

                
                <label>Email</label>
                <input 
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
               
                />
                
                
                <label>Phone Number</label>
                <input 
                    type="text"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phonenumber}
                 
                />

                
                <label>BirthDate</label>
                <input 
                    type="date"
                    onChange={(e) => setBirthDate(e.target.value)}
                    value={birthdate}
                  
                />

                <label>HireDate</label>
                <input 
                    type="date"
                    onChange={(e) => setHireDate(e.target.value)}
                    value={hiredate}
           
                />

                <button onClick={updateEmployeeDetails}>UPDATE</button>    
                    {error && <div className="error">{error}</div>}
            
                     <button className="just">A</button> 
            
            
        </form>
        


        
    )
}

export default EmployeeUpdate