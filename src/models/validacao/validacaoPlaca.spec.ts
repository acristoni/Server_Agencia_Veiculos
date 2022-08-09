import validacaoPlaca from './validacaoPlaca';

describe('validação numero de Placa valido', () => {
  it('Placa válida, modelo tradicional, exemplo VIX-2020', () => {
    expect(validacaoPlaca('VIX-2020')).toBeFalsy();
  });
  it('Placa INválida, modelo tradicional, exemplo VIX2020 (SEM HIFEN)', () => {
    expect(validacaoPlaca('VIX2020')).toBeTruthy();
  });
  it('Placa válida, modelo MERCOSUL, exemplo VIX2X20', () => {
    expect(validacaoPlaca('VIX2X20')).toBeFalsy();
  });
  it('Placa INválida', () => {
    expect(validacaoPlaca('qualquercoisa')).toBeTruthy();
  });
});
