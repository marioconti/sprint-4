import React from "react";

export const ClaseDos = () => {
  const Mayor = (a, b) => {
    let mayor = a > b ? a : b;
    return mayor;
  };
  return (
    <>
      <p>El numero mayor es: {Mayor(2, 1)}</p>
    </>
  );
};
