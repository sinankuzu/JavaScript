//!  %%%%%%%%%%% DEĞİŞKEN TANIMLAMA  %%%%%%%%%%%%%%%%

//  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

// ===================  CONST  ======================
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler (array..) hariç).

const yas=25;
console.log(yas);

// yas=27; hata const degeri degistirelemez

console.log(typeof yas);

// const pi; const degiskenine baslangic atamasi yapmak zorunludur

const kelime="osman";
console.log(kelime, typeof kelime);

const isTrue=true;

console.log(typeof isTrue);

const dolar= 1.1;

console.log(typeof dolar);

// ======================  LET  ========================
//? LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//! CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//? CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let dil;
dil="javascript"

console.log(dil);

dil=true;

console.log(dil, typeof dil);

dill=null;
console.log(dil, typeof dil);

let sayi=5;

console.log(7+ sayi);

let sayi1="5"

console.log(7+sayi1);

isim="ipek";
console.log(typeof isim);

//! değişken tanımlama keyword u kullanmasak bile JS derleyicisi otomatik  onu "var" olarak tanımlar

var sayi2=5;
console.log(sayi2);
sayi2=10;
console.log(sayi2);

console.log("*****************************");

var ilk="Global";
console.log(ilk);

{
    console.log(ilk);
    ilk="degistim";
    console.log(ilk);
}

console.log(ilk);

console.log("**************************************");

let first="osman"
console.log(first);

{

let first="degistim"
console.log(first);
}

console.log(first);