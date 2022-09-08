// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
console.log("************ 1- FUNC DECLARATION *************");

//* Örnek1:
//****************************************************************/
//Fonksiyonun tanımlanması


function yazdir() {
    console.log("ee naber daha daha nasilsiniz");
}

yazdir();// call veya invoke


//*Ornek2:(parametreli fonksiyon)

function adYazdir(ad,ikinciAd,soyad){
console.log(soyad, ad, ikinciAd);
}

adYazdir("dogu", "mevlut", "kuzu")

//*Ornek3:(parametreli, donus degerli (returnlu) fonksiyon)

function yasHesapla(ad, dogumTarihi) {
const yas = 2022-dogumTarihi;
console.log(`Benim adim ${ad}. Ben ${yas} yasindayim.`);
}

yasHesapla("Muhammed", 1990)
yasHesapla("Sinan", 1997)

// ornek4: parametreli, donus degerli

function tekCiftSayi(x){
   return x % 2 == 1 ? "tektir" : "cifttir"
}