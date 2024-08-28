const Carro = require("../src/carro")

describe("Testes para a classe Carro", () => {
  let carro = null

  beforeEach(() => {
    carro = new Carro("Ford", "KA", 2005)
  })

  test('Deve criar um carro com as propriedades corretas', () => {
    expect(carro.marca).toBe('Ford');
    expect(carro.modelo).toBe('KA');
    expect(carro.ano).toBe(2005);
    expect(carro.kilometragem).toBe(0);
  });

  test('Deve aumentar a quilometragem ao dirigir', () => {
    carro.dirigir(100);
    expect(carro.kilometragem).toBe(100);
  });

  test('Não deve aumentar a quilometragem com distância negativa', () => {
    carro.dirigir(-50);
    expect(carro.kilometragem).toBe(0);
  });

  test('Deve retornar a informação correta do carro', () => {
    carro.dirigir(250);
    expect(carro.obterInfo()).toBe('Ford KA, Ano: 2005, Quilometragem: 250 km');
  });


})