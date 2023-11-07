import React, { useState, useEffect } from 'react';

function ThemeSwitcher() {
  const [theme, setTheme] = useState('claro');

  const toggleTheme = () => {
    setTheme(theme === 'claro' ? 'escuro' : 'claro');
  };

  const bodyStyle = {
    backgroundColor: theme === 'claro' ? '#ffffff' : '#333333',
    color: theme === 'claro' ? '#000000' : '#ffffff',
  };

  useEffect(() => {
    document.body.style.backgroundColor = bodyStyle.backgroundColor;
    document.body.style.color = bodyStyle.color;
  }, [bodyStyle]);

  return (
    <div>
      <h2>Theme Switcher</h2>
      <button onClick={toggleTheme}>Alternar Tema</button>
      <div className="app">
        <p>Este é o tema {theme}</p>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
