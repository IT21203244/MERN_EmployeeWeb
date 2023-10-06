
const EmployeeSalary = ({ employeesalary }) => {



    return (
        
        <div className="Employee-Details1">
            <p><strong>Name         :</strong>{employeesalary.name}</p>
            <p><strong>Employee ID :</strong>{employeesalary.employeeid}</p>
            <p><strong>Basic Salary :</strong>{employeesalary.basicsalary}</p>
            <p><strong>Daily wage :</strong>{employeesalary.dailywage}</p>
            <p><strong>Net Salary :</strong>{employeesalary.netsalary}</p>
            
        </div>
    )
}

export default EmployeeSalary