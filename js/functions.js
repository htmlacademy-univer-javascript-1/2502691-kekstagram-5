function checkLenght (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
console.log(checkLenght('проверяемая строка', 10));

function isPalingrome (string) {
  string = string.replaceAll(' ', '');
  string = string.toLowerCase();
  reverseString = '';
  for (let i = string.length - 1; i >= 0; i--) {
      reverseString+=string[i];
  }
  if (reverseString === string) {
      return true;
  }
  return false;
}