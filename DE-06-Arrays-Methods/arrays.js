// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------

//! 1.YÖNTEM (Array Literal) - tercih edilen yöntem

const yaslar = [30, 54, 22, 18, 5];
console.log(yaslar);
console.log(yaslar.length);

//!hata const keyword ü ile tanımlanmış bir diziyi tamamıyla değiştiremezsiniz, ancak tek tek değişikliğe izin verir
// yaslar=[1,2,3,4,5]

//! 2. YÖNTEM (Array Constructor)

const cars = new Array("BMW", "Mercedes", "Volvo");
console.log(cars);

//! 10 elemanlı bir array tanımlama

const sayılar = new Array(10);
console.log(sayılar);

sayılar[4] = 256;
sayılar[9] = "Ayse";
console.log(sayılar);

console.log("*******************************");

const dogum = 1979;

const isimler = [
  "Faruk",
  "Güler",
  "Mevlüt",
  2022 - dogum,
  "Sinan",
  true,
  yaslar,
];

console.log(isimler);

//*dizinin elemanlarına veri yazma (indisleme)

isimler[5] = false;
isimler[7] = 16;
console.log(isimler);
console.log(isimler[3]);
console.log(isimler[6][2]); //22
console.log(isimler[isimler.length - 2][yaslar.length - 3]);

console.log(--isimler[6][2]); //elemanı 1 eksilttik
console.log(isimler[6][2]); //kalıcı değişiklik yaptık

// ?=========================================================
// ?                DİZİYİ DEĞİŞTİREN METODLAR (MUTATOR)
// ?=========================================================

//*pop() dizinin son elemanını siler, yazdırırsak sildiği elemanı döndürür
const meyveler = ["Elma", "Erik", "Armut", "Muz", "Kivi"];
console.log(meyveler);

console.log(meyveler, "sildiğim meyve:", meyveler.pop());

//*shift() dizinin ilk elemanını siler yazdırırsak sildiği elemanı döndürür

console.log(meyveler, meyveler.shift());

//*push() dizinin sonuna eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

const sayı = meyveler.push("Çilek", "Kavun", "karpuz");
console.log(meyveler, sayı);

//*unshift() dizinin başına eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

meyveler.unshift("Ayva");
console.log(meyveler);

//*reverse() dizinin tamamını ters çevirir

meyveler.reverse();
console.log(meyveler);

console.log(meyveler[4].split("").reverse());

// meyveler dizisinin 4. elemanını önce diziye çevirdik sonra tersini aldık, çünkü reverse dizilere ait bir metod
console.log(meyveler);

//*sort(), string ifadelerde alfabetik sıralar(ascıı değerlerine göre)
//* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu (a-b>0 önce b yi yaz gibi) dizinin her bir elemanına uygular. Bu sayade küçük sayılar ile büyük sayıları yer değişirerek sıralama işlemini gerçleştirir.

const number = [3, 5, 1, 35, 10, 22, 55, 77, 231];

number.sort();
console.log(number);

//*sadece sort dersek 22 den sonra 231 sonra 3 ü getirir, o yüzden alttaki gibi yazarız=bütün sayıları karşılaştır küçük olanı önce yaz
number.sort((a, b) => a - b);
console.log(number);

meyveler.sort();
console.log(meyveler); //ascıı numaralarına göre sıralar yani büyük harfler öncelikli

//*splice() 1. parametre dizinin eleman ekleyeceğimiz index ini belirtir
//*2. parametre=0 ise belirttiğim index teki elemanı sağa ittir, artık orada yeni yazdığım olsun
//*2.parametre=1 ise belirttiğim index teki elemanı sil üstüne yaz

// ["Armut", "Ayva", "Erik", "Kavun", "Muz", "karpuz", "Çilek"];
meyveler.splice(2, 0, "Mango");
console.log(meyveler); // ["Armut", "Ayva","Mango" "Erik", "Kavun", "Muz", "karpuz", "Çilek"];

meyveler.splice(1, 1, "Ananas");
// meyveler[1]="Ananas"
console.log(meyveler);

//? ===========================================================
//?  DİZİ ERİŞİM METOTLARI (diziyi değiştirmezler)
//? ===========================================================

const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5];

//* includes()
//*-----------------------------------------------------------
console.log(sayilar1.includes("5")); //false
console.log(sayilar1.includes(5)); //true

//* indexOf(),  lastIndexOf();
//*-----------------------------------------------------------

console.log(sayilar1.indexOf("2")); //3

console.log(sayilar1.indexOf(2, 4)); //5. 4 index ten sonraki 2 yi bul
console.log(sayilar1.lastIndexOf(5)); //7

//*örnek

// * kullanıcıdan sayı isteyin. girilen sayının hem string hem number hali sayılar dizisinde var mı araştır, varsa index ini döndür
// const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5];
const sayiString=prompt("lütfen bir sayı giriniz")

const sayiNumber=Number(sayiString);

let varMi=false;

if(sayilar1.includes(sayiString)){
 console.log("aradığınız stringin index i:", sayilar1.indexOf(sayiString) );
 varMi=true;
}
if(sayilar1.includes(sayiNumber)){
 console.log("aradıgınız number ın index i:", sayilar1.indexOf(sayiNumber));
 varMi=true;
}
// *true false yapısı yerine alttaki gibi de çözülebilir
if(sayilar1.includes(sayiString)==false && sayilar1.includes(sayiNumber)==false){
console.log("aradıgınız eleman yok");
}

// if(varMi==false){
//  console.log("aradıgınız eleman yok");
// }

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.join(" ")=>virgül+boşluk sil boşluklarla (join parantezinde 2 varsa her eleman arasına 2 koy) ayır
//* split(" ")=>string i boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orijinal diziyi değiştirmez

console.log(sayilar1.join("A ")); //3A 5A 2A 2A ucA 2A besA 5

//*dizinin 2 indexli elemanını tersten string olarak yazdır
//  const meyveler = // ["Armut", "Ayva","Mango" "Erik", "Kavun", "Muz", "karpuz", "Çilek"];

console.log(meyveler[2].split("").reverse().join("")); //ognaM

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

console.log(sayilar1.toString());

//* slice()
//*-----------------------------------------------------------

const arabalar = ["bmw", "merco", "audi", "ferrari", "anadol"];

console.log(arabalar.slice(3));
console.log(arabalar.slice(1, 3));

//!diziyi kopyalamak için kullanılabilir
const arabalarCopy = arabalar.slice();
console.log(arabalarCopy);

//* concat()
//*-----------------------------------------------------------

const yazilar = ["ali", "dogu", "hilal", "ipek"];
const rakamlar = [3, 5, 7, 1, 4];
const birlesik = yazilar.concat(
  rakamlar,
  true,
  ["a", "b", "c"],
  [["x", "y", "z"]]
);
console.log(birlesik);

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const yas = [18, 23, 35, 44, 57, 89, 15];

console.log(
  yas.every((a) => a >= 18)
    ? "dizideki herkesin yaşı 18 ve daha büyüktür"
    : "dizide 18 yas altı eleman var"
);

//sadece 15 yüzünden false döndürdü

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna (bizim yazdığımız fonksiyon) gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.
console.log(yas.some((a) => a > 70)); //true
console.log(yas.some((a) => a > 90)); //false

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemani yazdirin

console.log(yas.find((item) => item > 30));
console.log(yas.findLast((item) => item > 30));

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

console.log(yas.findIndex((i)=> i >30));
