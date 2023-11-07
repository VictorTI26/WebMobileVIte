import React from 'react';
import ToDo from './components/ToDo/ToDo';
import StatusEntrega from './components/StatusEntrega/StatusEntrega';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';


const App = () => {
  return <div>
      <ToDo/>
      <StatusEntrega/>
      <ThemeSwitcher/>
  </div>;
};

export default App;