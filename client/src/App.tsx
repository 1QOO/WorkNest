import { BrowserRouter, Routes, Route } from 'react-router'
import Login from './pages/Auth/Login.tsx'
import Register from './pages/Auth/Register.tsx'
import DashboardLayout from './pages/Dashboard/DashboardLayout'
import HRDashboard from './pages/Dashboard/HRDashboard.tsx'
import './App.css'
import Employee from './pages/Dashboard/Employee.tsx'
import Schedule from './pages/Dashboard/Schedule.tsx'


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<DashboardLayout />}>
          <Route path='/dashboard' element={<HRDashboard />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/schedule' element={<Schedule />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
