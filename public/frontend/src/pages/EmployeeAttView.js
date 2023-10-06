import { useEffect, useState } from "react"

import profile from '../images/avatar.png'
import droparrow from '../images/dropdown.png'

// components
import EmployeeAttendView from '../components/EmployeeAttendView'

const EmployeeAttView = () => {

    const [employeeattend, setEmployeeAttend] = useState(null)
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchEmployeeattend = async () => {
            const response = await fetch('/api/employeeattend/')
            const json = await response.json()

            if (response.ok){
                json.sort((a, b) => a.employeeid.localeCompare(b.employeeid))    
                setEmployeeAttend(json)
            }
        }

        fetchEmployeeattend()
    }, [])

    if (!employeeattend) {
        return <div>Loading...</div>;
    }

    const filteredEmployeeattend = employeeattend.filter(item => {
        return item.employeeid.toLowerCase().includes(searchQuery.toLowerCase());
    });
    
    // Group pledger array by employeeid 
    const groupedEmployeeattend = filteredEmployeeattend.reduce((groups, item) => {
        const group = groups[item.employeeid] || [];
        group.push(item);
        groups[item.employeeid] = group;
        groups[item.employeeid].totalHours = group.reduce((total, item) => {
            return total + item.totalhours;
        }, 0);
        return groups;
    }, {});
    
    return (
        <div className="home6">

            <div className='headbox'>
                <h3>Employee Attendance</h3>
            </div>

            <div className="plog">
                <h3>Employee Attendance</h3>
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
            <div className="searchb">
                <input style={{top: 170, borderRadius:34}} type="text" placeholder="Search by EmployeeID" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            

            {Object.entries(groupedEmployeeattend).map(([employeeid, group]) => (
                <div key={employeeid}>
                    <h3>.</h3>
                    <div className="pledger">
                        {group.map((item) => (
                            <EmployeeAttendView key={item._id} employeeattend={item} />
                        ))}
                        <div>Total Hours: {group.totalHours}</div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default EmployeeAttView
