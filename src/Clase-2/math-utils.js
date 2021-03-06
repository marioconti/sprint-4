import React from "react";

export const ClaseDos = () => {
  const mayor = (a, b) => {
    let mayor = a > b ? a : b;
    console.log(menor(2, 3, 4, 8));
    return mayor;
  };

  // OTRA SOLUCION DE FAUSTO
  // UNA
  // const menor = (...nums) => Math.max(...nums)
  // OTRA LARGA
  // const maxNum = (...nums) => {
  //   let max = null;
  //   nums.forEach((num) => {
  //     if (max === null) {
  //       return (max = num);
  //     } else if (num > max) return (max = num);
  //   });
  //   return max;
  // };
  // console.log(maxNum(2, 5, 1, 29));
  // =========================================================

  const menor = (...nums) => Math.min(...nums);

  return (
    <>
      <p>El numero mayor es a: {mayor(2, 1)}</p>
    </>
  );
};
