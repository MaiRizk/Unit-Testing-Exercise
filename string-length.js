function stringLength(str) {
  const result = [...str].length;
  if (result >= 1 && result <= 10) {
    return result;
  } else {
    return "Out of range";
  }
}

module.exports = stringLength
