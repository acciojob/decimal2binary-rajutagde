function decimalToBinary(decimal) {
  let binary = "";
  while (decimal > 0) {
    let remainder = decimal % 2;
    binary = remainder + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}
