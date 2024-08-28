const Lista = require("../src/lista")

describe("Testes para a classe Lista", () => {
  let lista = null

  beforeEach(() => {
    lista = new Lista()
  })

  test('Deve criar uma lista vazia', () => {
    expect(lista.obterItens()).toEqual([]);
  });

  test('Deve adicionar itens na lista', () => {
    lista.adicionarItem(1);
    lista.adicionarItem(2);
    lista.adicionarItem(3);
    expect(lista.obterItens()).toEqual([1, 2, 3]);
  });

  test('Deve remover itens da lista', () => {
    lista.adicionarItem(1);
    lista.adicionarItem(2);
    lista.adicionarItem(3);
    lista.removerItem(2);
    expect(lista.obterItens()).toEqual([1, 3]);
  });

  test("Deve retornar erro ao remover item com index -1", () => {
    expect(() => lista.removerItem(1)).toThrow("Item não encontrado na lista");
  })
})
