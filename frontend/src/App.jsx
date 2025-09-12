import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
 function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/admin-dashbord" />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/admin-dashbord" element={<AdminDashboard />}></Route>
      <Route path="/employee-dashbord" element={<EmployeeDashboard />}></Route>
    </Routes>
    
    </BrowserRouter>
  );
}
export default App;
