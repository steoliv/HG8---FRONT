import { useState } from 'react';
import './Login.css';
import oneLogo from '../assets/img/one-logo.webp';
import aluraLogo from '../assets/img/alura-logo.png';
import noCountryLogo from '../assets/img/no-country-logo.webp';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /* Aqui entrará a lógica de autenticação */
    console.log('Login:', { email, senha });
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        <div className="login-left-panel">
          <div className="login-left-content">
            <h1 className="login-main-title">Hackathon ONE - G8</h1>
            <p className="login-subtitle">Projeto: Sentiment API</p>
            
            <div className="login-icons-container">
              <div className="login-icon-wrapper">
                <img src={oneLogo} alt="ONE Logo" className="login-icon" />
              </div>
              <div className="login-icon-wrapper">
                <img src={noCountryLogo} alt="No Country Logo" className="login-icon" />
              </div>
              <div className="login-icon-wrapper">
                <img src={aluraLogo} alt="Alura Logo" className="login-icon" />
              </div>
            </div>

            <a href="/projeto" className="login-project-link">
              Conheça o projeto
            </a>
          </div>
        </div>

        <div className="login-right-panel">
          <div className="login-form-container">
            <h2 className="login-form-title">Login</h2>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  id="senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Senha"
                  required
                />
              </div>

              <button type="submit" className="login-submit-button">
                Entrar
              </button>
            </form>

            <div className="login-form-footer">
              <p>
                Não possui conta?{' '}
                <a href="/registro" className="register-link">
                  Registrar
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
