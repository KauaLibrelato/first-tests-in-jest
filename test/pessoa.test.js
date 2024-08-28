const Pessoa = require("../src/pessoa")

describe("Testes para a classe Pessoa", () => {
  let pessoa = null
  beforeEach(() => {
    pessoa = new Pessoa("João", 25)
  })

  test('Deve criar uma pessoa com as propriedades corretas', () => {
    expect(pessoa.nome).toBe('João');
    expect(pessoa.idade).toBe(25);
  });
  test('Deve retornar a informação correta da pessoa', () => {
    expect(pessoa.apresentar()).toBe(`Olá, meu nome é João e eu tenho 25 anos.`);
  });

  test('Deve atualizar a idade da pessoa', () => {
    pessoa.atualizarIdade(30);
    expect(pessoa.idade).toBe(30);

  })
})