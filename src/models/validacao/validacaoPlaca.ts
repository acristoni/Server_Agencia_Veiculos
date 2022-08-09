export default function validacaoPlaca(placa: string) {
  const regexMercosul = new RegExp('[A-Z]{3}[0-9][A-Z][0-9]{2}');
  const regexTradicional = new RegExp('[A-Z]{3}[-][0-9]{4}');

  if (placa.length === 7) {
    if (regexMercosul.test(placa)) {
      //PLACA MODELO MERCOSUL
      return false;
    }
  }

  if (placa.length === 8) {
    if (regexTradicional) {
      //PLACA MODELO TRADICIONAL
      return false;
    }
  }
  return true;
}
