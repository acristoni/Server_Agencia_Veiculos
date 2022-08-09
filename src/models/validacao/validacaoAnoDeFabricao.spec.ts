import validacaoAnoDeFabricao from './validacaoAnoDeFabricacao';

describe('validação Ano de Fabricação carro comprado', () => {
  it('Ano de fabricação válido, entre 1885 e 2100, DENTRO DO PADRÃO', () => {
    expect(validacaoAnoDeFabricao(2022)).toBeFalsy();
  });
  it('Ano de fabricação INválido, antes de 1885', () => {
    expect(validacaoAnoDeFabricao(1500)).toBeTruthy();
  });
  it('Ano de fabricação INválido, depois de 2100', () => {
    expect(validacaoAnoDeFabricao(3000)).toBeTruthy();
  });
});
