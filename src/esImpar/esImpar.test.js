import { esImpar } from "./esImpar";

test("Si ingresó un número impar el resultado debería ser true", () => {
  const result = esImpar(3);
  expect(result).toBe(true);
});
