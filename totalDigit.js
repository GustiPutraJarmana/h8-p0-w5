function totalDigitRekursif(angka) {
  var strAngka = angka.toString();
  var terakhir = angka % 10;
  if (!angka) {
    return 0;
  } else {
    return (terakhir += totalDigitRekursif(strAngka.slice(0, -1)));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
