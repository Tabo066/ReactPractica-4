import './App.css';
import roblox from '../src/imagenes/roblox.png';
import ListaTareas from './componentes/listaTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
<div className='logo-container'>
    <img src={roblox} alt='logo' className='freecodecamp-logo'/>
    </div>
    <div className='lista-principal'>
      <h1>Mis Tareas</h1>
      <ListaTareas/>
    </div>
    </div>

  );
}

export default App;
