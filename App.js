import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Create from './pages/Create';
import Mail from './pages/Mail';
import PasswordCreate from './pages/PasswordCreate';
import PasswordConfirmation from './pages/PasswordConfirmation';
import Signinsuccess from './pages/Signinsuccess';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/create" element={<Create />} />
        <Route path="/mail" element={<Mail />} />
        <Route path="/password" element={<PasswordCreate />} />
        <Route path="/password2" element={<PasswordConfirmation />} />
        <Route path="/signinsuccess" element={<Signinsuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
