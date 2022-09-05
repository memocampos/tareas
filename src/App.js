import './App.css';
import logo from './logo.png';
import ListaDeTareas from './componentes/ListaDeTareas';
import React from 'react';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
          <img 
            src={logo}
            className='logo'
            alt="logo" 
        
          /> 
      </div>
      
      <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          <ListaDeTareas />

      </div>
        
    </div>
  );
}

export default App;
