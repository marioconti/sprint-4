import { ListoParaDespegar } from "../ListoParaDespegar/index";
import { PanelCombustible } from "../PanelCombustible";
import { render, screen } from "@testing-library/react";

describe("Elcomponente ListoParaDespegar", () => {
  test("renderiza correctamente en pantalla", () => {
    // Como primer test, vamos a validar que nuestro componente aparezca en pantalla y el código se ejecute correctamente, esto sería un test base muy simple para la mayoría de los componentes.
    // Utilizaremos la función render que recibe como parámetro un componente
    render(<ListoParaDespegar estado={"valor que queramos pasar"} />);
    // screen: nos permite tomar, o encontrar, elementos de nuestra “pantalla”
    const componente = screen.getByText("Error", { exact: false });
    expect(componente).toBeInTheDocument();
    // le indicaremos a nuestro test que queremos buscar un elemento en nuestra pantalla que contenga un texto que matchee con el texto “Error”
  });
});

describe("El componente PanelCombustibel", () => {
  test("Recibe 2 números enteros y muestra si es posible realizar el viaje", () => {
    render(<PanelCombustible combustible={300000} distancia={400} />);
    const mensajeDeExisto = screen.getByText("Es posible realizar el viaje");
    expect(mensajeDeExisto).toBeInTheDocument();
  });
  test("Recibe 2 números enteros y muestra si no es posible realizar el viaje", () => {
    render(<PanelCombustible combustible={200000} distancia={400} />);
    const mensajeDeError = screen.getByText("No es posible realizar el viaje");
    expect(mensajeDeError).toBeInTheDocument();
  });
});
test("muestra el ratio distancia/combustible", () => {
    render(<PanelCombustible combustible={300000} distancia={400} />);
    // El ratio se calcula tomando el combustible dividido nuestra distancia a recorrer. Ese número resultado debemos dividirlo por nuestro factor de combustible/distancia base (700x)
    // 300.000 / 400 = 750   =>    750 / 700 = *1.07*
    const ratio = screen.getByText("El ratio es de: 1.07");
    expect(ratio).toBeInTheDocument();
  });
