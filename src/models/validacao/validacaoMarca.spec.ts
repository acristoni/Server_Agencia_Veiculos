import validacaoMarca from './validacaoMarca';

describe('marca do carro', () => {
  it('Retornar falso se houver dados no campo', () => {
    expect(validacaoMarca('qualquer marca')).toBeFalsy();
  });
  it('Retornar verdadeiro se NÃO houver dados no campo', () => {
    expect(validacaoMarca('')).toBeTruthy();
  });
});
