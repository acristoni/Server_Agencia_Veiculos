import validacaoModelo from './validacaoModelo';

describe('Modelo do carro', () => {
  it('Retornar falso se houver dados no campo', () => {
    expect(validacaoModelo('qualquer marca')).toBeFalsy();
  });
  it('Retornar verdadeiro se NÃO houver dados no campo', () => {
    expect(validacaoModelo('')).toBeTruthy();
  });
});
