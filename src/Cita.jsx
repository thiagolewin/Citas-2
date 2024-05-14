import React from 'react';
import './cita.css'
function Cita(props) {
  return (
    <div className="cita">
    <p>Mascota: <span>{props.nombre}</span></p>
    <p>Dueño: <span>{props.dueño}</span></p>
    <p>Fecha: <span>{props.fecha}</span></p>
    <p>Hora: <span>{props.hora}</span></p>
    <p>Sintomas: <span>{props.sintomas}</span></p>
    <button className="button eliminar u-full-width" onClick={() => props.eliminarCita(props.index)}>Eliminar ×</button>
  </div>
  );
}

export default Cita;