import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={svgWaveContainerStyle}>
        <svg viewBox="0 0 1440 120" style={{ display: 'block', width: '100%', height: 'auto' }}>
          <path
            fill="#2c2c4d"
            d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"
          ></path>
        </svg>
      </div>
      <nav style={navStyle}>
        <Link to="/destinos" style={linkStyle}>Destinos</Link>
        <Link to="/ofertas" style={linkStyle}>Ofertas</Link>
        <Link to="/contato" style={linkStyle}>Contato</Link>
      </nav>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#2c2c4d',
  position: 'relative',
  paddingBottom: '30px',
  marginTop: 'auto',
};

const svgWaveContainerStyle = {
  marginTop: '-60px',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '40px',
  marginTop: '10px',
};

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1.1rem',
};