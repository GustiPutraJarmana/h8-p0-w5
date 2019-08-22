function kaliTerusRekursif(angka) {
  var strAngka = String(angka);
  if (strAngka.length === 1) {
    return angka.toString();
  }
  var test = 1;
  for (var i = 0; i < strAngka.length; i++) {
    test *= Number(strAngka[i]);
  }
  return kaliTerusRekursif(test);
}
// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
