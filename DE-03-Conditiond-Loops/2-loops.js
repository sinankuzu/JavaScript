// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

// ekrana 10 kere MERHABA yazdırınız
for (let i = 1; i <= 10; i++) {
  console.log("MERHABA", i);
}

//* 1 den N e kadar olan tamsayıları topla
// const n =+prompt("n için kullanılacak sayıyı girin")
// let toplam=0;

// for(let i=1; i<=n; i++){
//  toplam+=i;
// }
// console.log(toplam);

//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

// const sayi=+prompt("ASAL kontrolü için bir sayı giriniz")
// let asal=true;

// for(let i=2; i<sayi; i++){

// if(sayi%i==0){
//  asal=false
// }
// }
// console.log(asal ? "asaldır":"asal değildir");
// asal==true yerine asal yazabiliriz

//************************ WHİLE ****************************

//*ORNEK1: while için 1-100  arasında bir sayı giriniz. aksi durumlarda error msj ı verip, tekrar sayı isteyiniz

let number = +prompt("WHİLE İÇİN 0-100 arası bir sayı giriniz");

while (number < 0 || number > 100) {
  console.error("number 0-100 arasında olmalı");
  number = +prompt("WHİLE İÇİN 0-100 arası bir sayı giriniz");
}
console.log("girdiğiniz sayı 0-100 arasındadır");

//! whil daki şart true old sürece altındaki süslü işler, false old anda süslünün dışına çıkılır


//---------------------DO-WHILE------------------

do{
    number1=+prompt("Enter a number for do-while")
    alert(number1)
}while(number1<0 || number>100)

// şarta bakmadan ilk etapta do nun içindeki istek yapılır, sonrasında while içi true old sürece do içindeki istek yapılmaya devam edilir
console.log(number1);

//? ORNEK2: klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.

let sayi1;
do {
  sayi1 = prompt("PLEASE SAYI GİRİNİZ");
} while (sayi1 != "q");

console.log(sayi1);