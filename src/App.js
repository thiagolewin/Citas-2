import Titulo from './Titulo.jsx';
import SubTitulo from './SubTitulo.jsx';
import Boton from './Boton.jsx';
import './App.css';
import Listado from './Listado.jsx';
import React, { useState } from 'react';
import Cita from './Cita.jsx';
import { useEffect } from 'react';
function App() {
  const [citas, setCitas] = useState([]);
  const eliminarCita = (index)=> {
    alert("Quieres continuar?")
    const nuevasCitas = citas.filter((_, i) => i !== index);
    setCitas(nuevasCitas);
    localStorage.setItem('citas', JSON.stringify(nuevasCitas));
  }
  useEffect(() => {
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas != "undefined" && citasGuardadas != "") {
      setCitas(JSON.parse(localStorage.getItem('citas')));
    } else {
      setCitas([])
    }
  }, []);
  const Submit = (e)=> {
    e.preventDefault(); // Evita que se recargue la página al enviar el formulario
    alert("Quieres continuar?")
    const nuevaCita = {
      nombre: e.target.mascota.value,
      dueño: e.target.propietario.value,
      fecha: e.target.fecha.value,
      hora: e.target.hora.value,
      sintomas: e.target.sintomas.value,
    };
    setCitas([...citas, nuevaCita]);
    localStorage.setItem('citas', JSON.stringify([...citas, nuevaCita]));
  }
  return (
    <>
      <noscript>You need to enable JavaScript to run this app.</noscript>
        <Titulo titulo="Citas"></Titulo>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <SubTitulo titulo="Crear mi cita"></SubTitulo>
              <form onSubmit={Submit}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota"/>
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" />
                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" />
                <label>hora</label>
                <input type="time" name="hora" className="u-full-width" />
                <label>Sintomas</label>
                <textarea name="sintomas" className="u-full-width"></textarea>
                <Boton></Boton>
              </form>
            </div>
            <div className="one-half column">
            <SubTitulo titulo="Administrar mis citas"></SubTitulo>
              <Listado citas={citas} eliminarCita = {eliminarCita}></Listado>
            </div>
          </div>
        </div>
      <script src="/static/js/bundle.js"></script>
      <script src="/static/js/vendors~main.chunk.js"></script>
      <script src="/static/js/main.chunk.js"></script>
    </>
  );
}

export default App;
