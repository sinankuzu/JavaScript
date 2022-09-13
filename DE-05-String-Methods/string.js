// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRİNG METHODS******");

//! 1-Klasik yöntem ile tanımlanan String primitive dir (ilkel)

const str1 = "clarusway";
const str2 = "hello ";
const str3 = "all the world";
console.log(str2 + str3, typeof (str2 + str3));

//! 2- String constructor ile tanımlanan String non-primitive dir (ilkel olmayan)

const str4 = new String("yeni bir String");
console.log(str4, typeof str4);

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods

// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================

let s1 = "hello ";
const s2 = "world ";

const s3 = s1.concat(s2);
console.log(s3);
console.log(s3.concat("Clarusway ", s1));
console.log(s1);
//!orjinal değerler değişmez, assigning ile değişkenin değeri değiştirilebilir
s1 = s1.concat(str3);
console.log(s1);

//* ----------------------------------------------------------
//* toUpperCase(), toLowerCase() --immutable
//* ----------------------------------------------------------

const myName = "Ashley Miller";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

let yourName = "ismet";

console.log(yourName.toLocaleUpperCase());

//! toLocaleUpperCase("tr")= tr yazsakta olur ama boş bırakınca da tr karakterlere uygun büyütebiliriz

//? ORNEK: iki string'i esit veya degil diye kiyaslayarak sonucu donduren fonksiyonu yaziniz.

const esitMiki = function(x,y){
y.toLocaleUpperCase("tr");
x.toLocaleUpperCase("tr");

  if (x === y) {
    return "girdiginiz sayilar esittir";
  } else {
   return "esit degildir";
  }

}

console.log(esitMiki("İsmet", "ismet"));
console.log(esitMiki("hello", "hell"));







const esitMi = (str1, str2) =>
  str1.toLocaleUpperCase() === str2.toLocaleUpperCase()
    ? `${str1} ile ${str2} Esittir`
    : "esit değildir";

console.log(esitMi("İSMET", "ismet"));
console.log(esitMi("hello", "hell"));
//* ----------------------------------------------------------
//* charAt()
//* ----------------------------------------------------------

const s4= "primitive \n veri tiplerinin \n property ve\nya metodu olmaz."
console.log(s4);

console.log(s4.charAt(5)); //t
console.log(s4.charAt(9)); //" "
console.log(s4.charAt()); // eğer bir index belirtmezseniz ilk harfi döndürür
console.log(s4.charAt(s4.length-1));//.

//* ----------------------------------------------------------
//* includes()- case sensitive(büyük küçük harfe duyarlı)
//* ----------------------------------------------------------

const kelime= "to be or not to be,  that is The questions."

console.log(kelime.includes("TO BE"));//false
console.log(kelime.includes("to be"));//true
console.log(kelime.includes("quest"));//true
console.log(kelime.includes(" "));//true
console.log(kelime.includes("to be", 14));//false
console.log(kelime.toUpperCase().includes("TO BE"));//true

//! NOT: incase sentive kullanmak icin kelime baslangicta kucuk veya
//! buyuk harfe cevirilerek arama yapilabilir.


//*----------------------------------------------------------
//* indexOf()- lastIndexOf()- case sensitive
//* ----------------------------------------------------------

 const kelime1 = "to be or not to be, be that is The questions.";

 console.log(kelime1.indexOf("be"));//3
 console.log(kelime1.lastIndexOf("be"));//20
 console.log(kelime1.indexOf("this"));//-1
 console.log(kelime1.indexOf("TO BE"));//-1
 //bulamazsa -1 cevabını döndürür
 console.log(kelime1.indexOf(" "));//2
 console.log(kelime1.indexOf("be",4));//16

//* ----------------------------------------------------------
//* search()
//* ----------------------------------------------------------

const kelime2 = "to be or not to be, be that is The questions 9.";

console.log(kelime2.search(/[A-Z]/));//31
console.log(kelime2.search(/[0-9]/));//45
console.log(kelime2.search(/[a-z]/));//0
console.log(kelime2.search(/[.]/));//46
console.log(kelime2.indexOf("."))//46
console.log(kelime2.search(/[0-9A-Za-z]/));// ilk bulduğu küçük harfin index ini döndürdü
 console.log(kelime2.search(/[^a-z]/));// küçük harflerin dışında ilk bulduğunu döndürdü

//* ----------------------------------------------------------
//* startsWith(), endsWith() -- case sensitive
//* ----------------------------------------------------------
const kelime3="Salına salına sinsice olurum sana!";

console.log(kelime3.startsWith("sa"));//false
console.log(kelime3.startsWith("Sa"));//true
console.log(kelime3.startsWith("salına",7));//true
// 7 den itibaren say başlangıcı 7 olsun 7 dahil
console.log(kelime3.endsWith("!"));//true
console.log(kelime3.endsWith("salına",13));//true
// 13. karakterde bitsin, 13 e kadar al ve 13 dahil değil

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable
//* ----------------------------------------------------------

let oku= "Oku Johny gibi, saf olma, saf olma saf olma";


oku=oku.replace("saf olma", "basarili ol ")
console.log(oku);//Oku Johny gibi, basarili ol , saf olma saf olma


console.log(oku.replace(/SAF/i , "fakir"));
// /SAF/i= buradaki i harfi büyük küçük harfe duyarsız ol demek
console.log(oku);

console.log(oku.replace(/Saf olma/gi, "zengin ol"));
//!gi ile yazılırsa tüm saf olma (büyük küçük harfe duyarsız) kelimelerini değiştirir, aksi takdirde ilk bulduğunu

//* ----------------------------------------------------------
//*  replaceAll() --immutable
//* ----------------------------------------------------------

let degistir = "Oku Johny gibi, saf olma, saf olma SAF olma";

console.log(degistir.replaceAll("saf olma", "akıllı ol"));


//* ----------------------------------------------------------
//*  slice(beginIndex, endIndex)
//*  substring(beginIndex, endIndex)
//*  substr (depreceated)
//* ----------------------------------------------------------

const veysel="UZUN İNCE BİR YOLDAYIM YÜRÜYORUM GUNDUZ GECE";

console.log(veysel.slice(33));//GUNDUZ GECE
console.log(veysel.slice(17,30));//DAYIM YÜRÜYOR
console.log(veysel.substring(17,30));//DAYIM YÜRÜYOR
console.log(veysel.slice(-21,-17));//YÜRÜ
console.log(veysel.slice(16,-17));//LDAYIM YÜRÜ
console.log(veysel.slice(-11));//YÜRÜ

//!substring metodunda - index kullanmak çalışmaz
console.log(veysel.substring(-11));//YÜRÜ



//* ----------------------------------------------------------
//* split= string i diziye çevirir
//* split(seperator , limit ) =>ikisi de optional
// //* split(" ")=>boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orjinal diziyi değiştirmez
//* ----------------------------------------------------------

const tarkan="Gel gündüzle gece olalım";

console.log(tarkan.split("e"));// e harflerinden ayırarak bir dizi oluştur
console.log(tarkan.split(" "));// boşluklardan ayırarak bir dizi oluştur
console.log(tarkan.split(""));// harf harf ayırarak bir dizi oluştur

console.log(tarkan.split("e",4)); //e harflerinden ayırarak bir dizi oluştur, oluşan dizinin ilk 4 elemanını al
console.log(tarkan.split(" ",2));
console.log(tarkan.split());//tek elemanlı bir diziye çevirir
console.log(tarkan);


//* ----------------------------------------------------------
//*  trim();
//* ----------------------------------------------------------

const ramazan="    Hos geldin ya Sehr i Ramazan     ";
console.log(ramazan);
console.log(ramazan.length);//37

 console.log( ramazan.trim())
 console.log( ramazan.trim().length)//28 
//String in başındaki ve sonundaki boşlukları siler





























