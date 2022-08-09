import validacaoCor from './validacaoCor';

describe('Cor do carro', () => {
  it('Retornar falso se houver dados no campo', () => {
    expect(validacaoCor('qualquer marca')).toBeFalsy();
  });
  it('Retornar verdadeiro se NÃO houver dados no campo', () => {
    expect(validacaoCor('')).toBeTruthy();
  });
});
