import React from 'react';
import './HomePage.css';

const HomePage = () => {
  const welcomeMessages = [
    'Welcome',
    'Bienvenido',
    'Bienvenue',
    'Willkommen',
    'Benvenuto',
    '欢迎',
    'ようこそ',
    '환영합니다',
    'Добро пожаловать',
    'Bem-vindo'
  ];

  return (
    <div className="homepage">
      <h1 className="title">Pedro Enderica</h1>
      <div className="floating-letters">
        {welcomeMessages.map((message, index) => (
          <div key={index} className="welcome-message">
            {message.split('').map((letter, i) => (
              <span key={i} className="floating-letter">{letter}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;