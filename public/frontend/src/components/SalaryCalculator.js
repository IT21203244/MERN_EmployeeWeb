import { useState } from "react"


const SalaryCalculator = () => {

    const [name, setName] = useState('')
    const [employeeid, setEmployeeId] = useState('')
    const [role, setRole] = useState('')
    const [basicsalary, setBasicSalary] = useState('')
    const [dailywage, setDailyWage] = useState('')
    const [allowances, setAllowances] = useState('')
    const [salaryallowances, setSalaryAllowances] = useState('')
    const [staffloan, setStaffLoan] = useState('')
    const [epf, setEpf] = useState('')
    const [etf, setEtf] = useState('')
    const [netsalary, setNetSalary] = useState('')

    const [error, setError] = useState(null)
    const [emptyfields, setEmptyFields]= useState([])



    const handleSubmit = async (e) => {
        e.preventDefault()

        const employee = {name, employeeid, role, basicsalary, dailywage, allowances, salaryallowances, staffloan, epf, etf, netsalary }

        const response = await fetch('/api/employeeSalary', {
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
            setName('')
            setEmployeeId('')
            setRole('')
            setBasicSalary('')
            setDailyWage('')
            setAllowances('')
            setSalaryAllowances('')
            setStaffLoan('')
            setEpf('')
            setEtf('')
            setNetSalary('')
            setError(null)
            setEmptyFields([])
            console.log('New Salary Added', json)
        }
    }

    return(
        <form className="create2" onSubmit={handleSubmit}>
            <div className="form-head2">
                <h3>Employee Salaries</h3>
            </div>
            <div className="jb0">
            
                <label className="S1">Name</label>
                <input 
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className={emptyfields.includes('name') ? 'error' : ''}
                />
            </div>

            <div className="jb1">
            
                <label className="S2">EmployeeID</label>
                <input 
                    type="text"
                    onChange={(e) => setEmployeeId(e.target.value)}
                    value={employeeid}
                    className={emptyfields.includes('employeeid') ? 'error' : ''}
                />
                </div>

                <div className="jb2">
            
                <label className="S3">Role</label>
                <input 
                    type="text"
                    onChange={(e) => setRole(e.target.value)}
                    value={role}
                    className={emptyfields.includes('role') ? 'error' : ''}
                />
                </div>
                <div className="jb3">
            
                <label className="S4">Basic Salary</label>
                <input 
                    type="text"
                    onChange={(e) => setBasicSalary(e.target.value)}
                    value={basicsalary}
                    className={emptyfields.includes('basicsalary') ? 'error' : ''}
                />
                </div>

                <div className="jb4">
            
                <label className="S5">Daily Wage</label>
                <input 
                    type="text"
                    onChange={(e) => setDailyWage(e.target.value)}
                    value={dailywage}
                    className={emptyfields.includes('dailywage') ? 'error' : ''}
                />
                </div>

                <div className="jb5">
            
                <label className="S6">Allowances</label>
                <input 
                    type="text"
                    onChange={(e) => setAllowances(e.target.value)}
                    value={allowances}
                    className={emptyfields.includes('allowances') ? 'error' : ''}
                />
                </div>

                <div className="jb6">
            
                <label className="S7">Salary Allowances</label>
                <input 
                    type="text"
                    onChange={(e) => setSalaryAllowances(e.target.value)}
                    value={salaryallowances}
                    className={emptyfields.includes('salaryallowances') ? 'error' : ''}
                />
                </div>

                <div className="jb7">
            
                <label className="S8">Staff Loan</label>
                <input 
                    type="text"
                    onChange={(e) => setStaffLoan(e.target.value)}
                    value={staffloan}
                    className={emptyfields.includes('staffloan') ? 'error' : ''}
                />
                </div>

                <div className="jb8">
            
                <label className="S10">Epf</label>
                <input 
                    type="text"
                    onChange={(e) => setEpf(e.target.value)}
                    value={epf}
                    className={emptyfields.includes('epf') ? 'error' : ''}
                />
                </div>

                <div className="jb9">
            
            <label className="S11">Etf</label>
                <input 
                    type="text"
                    onChange={(e) => setEtf(e.target.value)}
                    value={etf}
                    className={emptyfields.includes('etf') ? 'error' : ''}
                />
                </div>
            
            <div className="jb10">
            
            <label className="S12">Net Salary</label>
                <input 
                    type="text"
                    onChange={(e) => setNetSalary(e.target.value)}
                    value={netsalary}
                    className={emptyfields.includes('netsalary') ? 'error' : ''}
                />
                </div>
            
            
            
            
                
                
            <div className="salaryb1">
            <button>ADD</button>  
            </div>  

            {error && <div className="error">{error}</div>} 
           
            
            
        </form>
        
    )
}

export default SalaryCalculator