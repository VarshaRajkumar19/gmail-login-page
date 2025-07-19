import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gmailIcon from '../data/gmail.png';
import './Login.css';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <img src={gmailIcon} alt="Gmail Icon" className="gmail-icon" />
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button onClick={() => navigate('/')}>Login</button>
    </div>
  );
}

export default Login;
