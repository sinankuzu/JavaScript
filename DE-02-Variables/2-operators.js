// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const sucuk = 100;
const sakiz = 5;
const kola = 10;

let toplamFiyat = sucuk + sakiz + kola;
console.log(toplamFiyat);
console.log(sucuk +sakiz +kola);

// 1 arttir
toplamFiyat++
// toplamFiyat=toplamFiyat+1
console.log(toplamFiyat);

// 10 arttir
toplamFiyat+=10;
// toplamFiyat=toplamFiyat+10

console.log(toplamFiyat);

//? + operatörü String Concatination işlemi de yapar.
const ad = "ahmet";
const soyAd = "Can";
console.log(ad  + soyAd);

const dogumTarihi=1979;

const isim="Ashley";

console.log(isim + " " + (2022- dogumTarihi) + " " + "yasindadir");

console.log(`${isim} ${2022-dogumTarihi} yasindadir`);

//tirnak icinde dolar ve suslu otomatik olarak backtick yapiyor eklenti sayesinde.
console.log(`${isim} ${2022-dogumTarihi} yasindadir`);

// *ARTTIRMA AZALTMA

let a=5;

console.log("ilk", a++, a); //5, 2. a goruldugu uzere artik 6 oldu
console.log(a);

b=a++;

console.log(b);
console.log(a);

console.log("**********************");

let c=10;

let d=++c
console.log(++c);

let e=33;

console.log(--e); //32
console.log(e--, e); //32, 31

// e yi 5 arttir

e+=5;
console.log(e);

// c nin 10 katini al

c*=10;
console.log(c);