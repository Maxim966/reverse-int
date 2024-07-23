module.exports = function reverse (n) {
    let result = "";
    let str = Math.abs(n).toString();
    let i = str.length - 1;

  while (i >= 0) {
    result += str[i];
    i -= 1
  }
  return parseInt(result);
}
