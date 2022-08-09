export default function validacaoChassi(chassi: string) {
  const regexChassi = new RegExp('[0-9][A-Z]{2}[0-9A-Z]{9}[0-9]{5}');

  if (chassi.length === 17) {
    if (regexChassi.test(chassi)) {
      return false;
    }
  }

  return true;
}
