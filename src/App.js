import { Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import HomePage from './pages/HomePage';
import AddCustomerPage from './pages/AddCustomerPage';
import CustomersTablePage from './pages/CustomersTablePage';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="font-inter">
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/customerspage" element={<AddCustomerPage />} />
        <Route path="/customertablepage" element={<CustomersTablePage />} />
      </Routes>
    </div>
  );
}

export default App;
