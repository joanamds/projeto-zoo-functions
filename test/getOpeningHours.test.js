const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('1 - Testa se passado nenhum parâmetro, a função retorna um objeto com os horários de atendimento do zoo', () => {
    const expectedResult = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    const calledFunction = getOpeningHours();

    expect(calledFunction).toEqual(expectedResult);
  });

  it('2 - Espera que a função indique se o zoológico está aberto ou não a partir do dia da semana e do horário passados como parâmetros', () => {
    const paramsFunction1 = getOpeningHours('Monday', '09:00-AM');
    const paramsFunction2 = getOpeningHours('Tuesday', '09:00-AM');
    const paramsFunction3 = getOpeningHours('Wednesday', '09:00-PM');
    const expectedMessage = 'The zoo is closed';
    const expectedMessage2 = 'The zoo is open';
    expect(paramsFunction1).toBe(expectedMessage);
    expect(paramsFunction2).toBe(expectedMessage2);
    expect(paramsFunction3).toBe(expectedMessage);
  });
});
