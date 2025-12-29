import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registro.css';
import oneLogo from '../assets/img/one-logo.webp';
import aluraLogo from '../assets/img/alura-logo.png';
import noCountryLogo from '../assets/img/no-country-logo.webp';

const Registro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /* Aqui entrará a lógica de registro */
    console.log('Registro:', { nome, email, senha });
  };

  return (
    <div className="registro-page-container">
      <div className="registro-card">
        <div className="registro-left-panel">
          <div className="registro-left-content">
            <h1 className="registro-main-title">Hackathon ONE - G8</h1>
            <p className="registro-subtitle">Projeto: Sentiment API</p>
            
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

            <a href="/projeto" className="registro-project-link">
              Conheça o projeto
            </a>
          </div>
        </div>

        <div className="registro-right-panel">
          <div className="registro-form-container">
            <h2 className="registro-form-title">Registrar</h2>

            <form onSubmit={handleSubmit} className="registro-form">
              <div className="form-group">
                <input
                  type="text"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Nome"
                  required
                />
              </div>

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

              <button type="submit" className="registro-submit-button">
                Cadastrar
              </button>
            </form>

            <div className="registro-form-footer">
              <p>
                Já possui conta?{' '}
                <Link to="/login" className="login-link">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;

