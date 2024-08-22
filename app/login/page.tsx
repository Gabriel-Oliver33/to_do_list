"use client";

import React, { useState } from 'react';
import styles from './Login.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === 'admin' && password === 'admin') {
      window.location.href = '/home'; // Redireciona para a página Home após login bem-sucedido
    } else {
      setError('Email ou senha incorretos.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Login</h1>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleLogin} className={styles.submitButton}>Entrar</button>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
