const ALPHABET_LENGTH = 26;
const CHAR_CODE_A = 'a'.charCodeAt(0);
const LETTER_REGEX = /^[a-zA-Z]$/;

function isLetter(c) {
  return LETTER_REGEX.test(c);
}

function getIndexFromLetter(letter) {
  return letter.charCodeAt(0) - CHAR_CODE_A;
}

function getLetterFromIndex(index) {
  return String.fromCharCode(CHAR_CODE_A + index);
}

function shiftIndex(index, shift) {
  const r = (index + shift) % ALPHABET_LENGTH;
  return r < 0 ? r + ALPHABET_LENGTH : r;
}

function transformChar(char, shift) {
  if (!isLetter(char)) return char;

  const isUpper = char >= 'A' && char <= 'Z';
  const lower = char.toLowerCase();

  const original = getIndexFromLetter(lower);
  const shifted = shiftIndex(original, shift);

  const newChar = getLetterFromIndex(shifted);
  return isUpper ? newChar.toUpperCase() : newChar;
}

function cifrarCesar(texto, desplazamiento) {
  if (typeof texto !== 'string') throw new TypeError('texto debe ser un string');
  if (!Number.isInteger(desplazamiento)) desplazamiento = Math.trunc(Number(desplazamiento) || 0);

  let resultado = '';
  for (let i = 0, len = texto.length; i < len; i++) {
    resultado += transformChar(texto[i], desplazamiento);
  }
  return resultado;
}
