const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('1 - Testa se o argumento `count` retorna o número inteiro 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('2 - Testa se para o argumento `names` retorna um array de nome que possui o nome `Jefferson`', () => {
    const expectedName = 'Jefferson';
    const names = handlerElephants('names');
    expect(names).toContain(expectedName);
  });

  it('3 - Testa se para o argumento `averageAge` retorna um número próximo a 10.5', () => {
    const averageAge = handlerElephants('averageAge');
    const expectedAverage = 10.5;
    expect(averageAge).toBeCloseTo(expectedAverage);
  });

  it('4 - Testa se dado nenhum parâmetro a função retorna `undefined`', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('5 - Testa se dado algum parâmetro que não seja uma string retorne uma mensagem de erro', () => {
    const paramNumber = handlerElephants(10);
    const paramBoolean = handlerElephants(true);
    const paramObject = handlerElephants(['names']);
    const expectedMessage = 'Parâmetro inválido, é necessário uma string';

    expect(paramNumber).toBe(expectedMessage);
    expect(paramObject).toBe(expectedMessage);
    expect(paramBoolean).toBe(expectedMessage);
  });
});
