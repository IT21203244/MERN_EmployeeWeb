const EmployeeAttendView = ({employeeattend}) => {

    return (
        
        <div className='ledview'>
                <div className="tsb1">

                <div className="mth" >

                    <table className="mtable">
                        <tbody>
                        
                                <th>Employee-ID</th>
                                <th>Month</th>
                                <th>Day</th>
                                <th>Time IN</th>
                                <th>Time Out</th>
      

                                <tr >
                                <td>{employeeattend && employeeattend.employeeid}</td>
                                <td>{employeeattend && employeeattend.month}</td>
                                <td>{employeeattend && employeeattend.date}</td>
                                <td>{employeeattend && employeeattend.timein}</td>
                                <td>{employeeattend && employeeattend.timeout}</td>
                               
 
                            </tr>
               
                        </tbody>
                    </table>
                    </div>
                </div>

                

                <button className="just" style={{position:"absolute", top:2910}}>A</button>

               
        </div>
    )
}

export default EmployeeAttendView