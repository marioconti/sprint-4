import React from "react";
const factorCombustible = 700;
const redondearNumero = (numero) => {
  //usamos una fx para redondear a 2 decimales el resutlado
  return Math.round((numero + Number.EPSILON) * 100) / 100;
};
export const PanelCombustible = ({ combustible, distancia }) => {
  const puedeHacerElViaje = combustible / factorCombustible >= distancia;
  const mensaje = puedeHacerElViaje
    ? "Es posible realizar el viaje"
    : "Error: No es posible realizar el viaje";
  const combustibleSobreDistancia = combustible / distancia;
  const ratio = redondearNumero(combustibleSobreDistancia / factorCombustible);

  return (
    <>
      <div>{mensaje}</div>
      <div>El ratio es de:{ratio}</div>
    </>
  );
};
