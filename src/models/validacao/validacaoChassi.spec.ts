import validacaoChassi from './validacaoChassi';

describe('validação numero de Chassi valido', () => {
  it('Chassi válido, exemplo 9BG116GW04C400001, DENTRO DO PADRÃO', () => {
    expect(validacaoChassi('9BG116GW04C400001')).toBeFalsy();
  });
  it('Chassi INválido', () => {
    expect(validacaoChassi('qualquercoisa123')).toBeTruthy();
  });
});
