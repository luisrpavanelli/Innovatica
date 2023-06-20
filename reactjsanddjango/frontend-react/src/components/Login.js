import React, { useState } from 'react';
import { login } from './services/api';
import './styles.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const token = await login(username, password);

      // Storage token in  local 
      localStorage.setItem('token', token);

      // Direction page of list of products
      window.location.href = '/produtos';
    } catch (error) {
      console.error('Falha ao fazer login:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <label>
        Nome de usuário:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Senha:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
