import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import ResetConfirmation from './Components/ResetConfirmation';
import ResetPassword from './Components/ResetPassword';
import Register from './Components/Register';
import Welcome from './Components/Welcome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-confirmation" element={<ResetConfirmation />} />
        <Route path="/reset-password/" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="*" element={<div><h1>Please Check your URL</h1></div>} />
      </Routes>
    </Router>
  );
};

export default App;
