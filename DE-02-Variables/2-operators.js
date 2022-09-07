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


//*ÇARPMA VE ÜS ALMA
//********************** */

const pi=3.14;
const r=5;
const alan=pi*r**2;//? üs alma (**) ile olur
const cevre=Math.ceil(2*pi*r);
console.log(alan, cevre);

//?Bazı fonksiyonlar
// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.


//*-----MOD ALMA-----*********

const number=456;
const birler=number%10;
const onlar=Math.floor(number/10)%10;
const yüzler=Math.trunc(number/100);
console.log(birler,onlar,yüzler);

// * =======================================================
// *                 KARŞILAŞTIRMA OPERATÖRLERİ
// * =======================================================

const sayi1=4;
console.log(sayi1==4);//true
console.log(sayi1=="4");//true
console.log(sayi1==="4");//false

console.log(sayi1!=4);//false
console.log(sayi1!="4");//false

console.log(sayi1>4);//false
console.log(sayi1>=4);//true


// * =======================================================
// *                 MANTIKSAL OPERATÖRLER
// * =======================================================

//? TRUE
console.log(Boolean(5));//true
console.log(Boolean(-5));//true
console.log(Boolean(-15.5));//true

//? 5 falsy
console.log(Boolean(0)); //false
console.log(Boolean(null));//false
console.log(Boolean(""));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false

const v1=false || 0 || 12.6 || true || false || null
console.log(v1);

const v2= false || 0 || null || undefined || NaN;
console.log(v2);

const v3= 5 && true && true && 0 && "";
console.log(v3);

const v4= 6 && true && 12.5 && 7;
console.log(v4);//7

//*DEĞİL !

console.log(!v4);//false
console.log(!v2);//true


// * =======================================================
// *                TİP DÖNÜŞÜMLERİ
// * =======================================================

const para= Number("1000") +Number("900")

console.log(para);



console.log(Number("")); //0
console.log(Number(null)); //0
console.log(Number(true));//1


//* -------- NULLISH COALESCING OPERATOR----------- */
//?  Bir ifadenin null veya undefined olması durumuna göre seçim yapmamıza olanak sağlayan bir operatördür.eğer kullanıcı input a null girer yada hiçbişey (undefined) girmezse, belirteceğim 2. ifadeyi (noname) kabul et


const isim1 = null; // ?null
const defaultIsim = "noname";
;
// isim1 true ise onu döndür yoksa 2. ifadeyi
console.log(isim1 ?? defaultIsim); //noname 