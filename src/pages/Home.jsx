import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="container">
      {/* Ilustração do Mundo com Marcadores */}
      <div style={illustrationContainerStyle}>
        <div style={globeStyle}>
          <div style={pin1Style}>📍</div>
          <div style={pin2Style}>📍</div>
          <div style={pin3Style}>📍</div>
        </div>
      </div>

      <h1 style={titleStyle}>
        O seu próximo <span className="highlight-pink">destino</span> pode estar aqui...
      </h1>

      <p style={subtitleStyle}>
        Aqui você encontra uma seleção de <span className="highlight-bold">pacotes completos</span> para as suas férias!
      </p>

      <p style={descriptionStyle}>
        No <span className="highlight-bold">ConnectFlight</span> você encontra pacotes de viagens nacionais e<br />
        internacionais que incluem: passagens aéreas, hotéis, café da manhã<br />
        e até seguro viagem com <span className="highlight-bold">preços arrasadores</span>!
      </p>

      <p style={callToActionStyle}>
        Se você ainda não tem um destino definido, confira nossa seção de <Link to="/ofertas" style={{ color: '#555', textDecoration: 'underline' }}>ofertas</Link>.
      </p>
    </main>
  );
}

const illustrationContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '20px 0 30px 0',
};

const globeStyle = {
  width: '180px',
  height: '180px',
  borderRadius: '50%',
  backgroundColor: '#2c2c4d',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
};

const pin1Style = { position: 'absolute', top: '20px', left: '40px', fontSize: '24px' };
const pin2Style = { position: 'absolute', top: '10px', right: '50px', fontSize: '28px' };
const pin3Style = { position: 'absolute', bottom: '40px', right: '30px', fontSize: '22px' };

const titleStyle = {
  fontSize: '2.2rem',
  color: '#333333',
  fontWeight: '600',
  marginBottom: '15px',
};

const subtitleStyle = {
  fontSize: '1.1rem',
  color: '#777777',
  marginBottom: '20px',
};

const descriptionStyle = {
  fontSize: '1rem',
  color: '#666666',
  lineHeight: '1.7',
  marginBottom: '30px',
};

const callToActionStyle = {
  fontSize: '0.95rem',
  color: '#888888',
};