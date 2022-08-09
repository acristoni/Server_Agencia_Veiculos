export default function validacaoAnoDeFabricao(anoCarro: number) {
  if (anoCarro < 1885 || anoCarro > 2100) {
    return true;
  }
  return false;
}
