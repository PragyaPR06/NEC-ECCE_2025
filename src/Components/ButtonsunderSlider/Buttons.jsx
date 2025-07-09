import React from 'react';

const VerticalButtons = () => {

  
  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '1rem',
    paddingLeft:'1.3rem',
    marginLeft:'2rem',
    marginBottom: '1rem',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease',
  };
 
  const buttons = [
    { text: 'Brochure', path: '/Brochure', color: 'linear-gradient(to right, #3b82f6, #1d4ed8)' },
    { text: 'Digest Submission', path: '/PaperSumbissionGuide', color: 'linear-gradient(to right, #14b8a6, #0d9488)' },
    { text: 'Call for Special Session', path: '/Specialsession', color: 'linear-gradient(to right, #22c55e, #15803d)' },
  ];

  const handleClick = (path) => {
    window.location.href = path;
  };

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto', padding: '1rem' }}>
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleClick(button.path)}
          style={{
            ...buttonStyle,
            background: button.color,
          }}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default VerticalButtons;