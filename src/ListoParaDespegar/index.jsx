import React from "react";

export const ListoParaDespegar = ({ estado }) => {
  const obtenerEstado = () => {
    if (estado === "OK") {
      return "la nave está lista para despegar!";
    } else if (estado === "NO") {
      return "la nave no está lista para despegar";
    } else {
      return "Error: revisar valores de los parametros enviados";
    }
  };
  return (
    <div>
      <p>{obtenerEstado()}</p>
    </div>
  );
};
