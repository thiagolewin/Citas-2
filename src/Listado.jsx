import React from 'react';
import Cita from './Cita';

function Listado({ citas,eliminarCita }) {
  return (
    <>
      {citas.map((cita, index) => (
        <Cita
          key={index} // Usamos index como key si citas es un array
          nombre={cita.nombre}
          dueño={cita.dueño}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
          eliminarCita={() => eliminarCita(index)}
        />
        
      ))}
    </>
  );
}

export default Listado;
