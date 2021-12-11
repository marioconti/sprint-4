import { esImpar } from "./esImpar";

describe("La función esImpar", () => {
  test("devuelve true si ingresó un numero impar", () => {
    const result = esImpar(3);
    expect(result).toBe(true);
  });

  test("devuelve false si ingresó un numero impar", () => {
    const result = esImpar(3);
    expect(result).not.toBe(false);
  });

  test("devuelve false si ingresó un numero par", () => {
    const result = esImpar(2);
    expect(result).toBe(false);
  });

  test("devuelve true si ingresó un numero par", () => {
    const result = esImpar(2);
    expect(result).not.toBe(true);
  });

  test("retorna un mensaje de error si no ingresó un valor", () => {
    const result = esImpar();
    expect(result).toBe("Debes ingresar un valor");
  });

  test("retorna un mensaje de error si ingresó un valor no numérico", () => {
    const result = esImpar("cuatro");
    expect(result).toBe("Debes ingresar un valor numérico");
  });
});
