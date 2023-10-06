import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages & components


import EmployeeProfile from './pages/EmployeeProfile';
import EmployeeRegister from './components/EmployeeRegister';
import SalaryCalculator from './components/SalaryCalculator';
import EmployeeS from './pages/EmployeeS';
import EmployeeUpdate from './components/EmployeeUpdate';
import EmployeeAttendance from './pages/EmployeeAttendance';
import EmployeeAttView from './pages/EmployeeAttView';
import EmployeeNavbar from './components/EmployeeNavbar';
import EmployeeHome from './pages/EmployeeHome';
import EmployeeNewLogin from './pages/EmployeeNewLogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <EmployeeNavbar/>
        
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<EmployeeHome/>}
            />

          <Route
              path="/EmployeeProfile"
              element={<EmployeeProfile/>}
            />

            <Route
              path="/EmployeeRegister"
              element={<EmployeeRegister/>}
            />

              <Route
              path="/SalaryCalculator"
              element={<SalaryCalculator/>}
            />

            <Route
              path="/EmployeeS"
              element={<EmployeeS/>}
            />

            <Route
              path="/update/:id"
              element={<EmployeeUpdate />}
            />

            <Route
              path="/EmployeeAttendance"
              element={<EmployeeAttendance/>}
            />

            <Route
              path="/EmployeeAttView"
              element={<EmployeeAttView/>}
            />

              <Route
              path="/empuserlogin"
              element={<EmployeeNewLogin />}
            />



          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
