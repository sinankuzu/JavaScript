// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.

//* ornek1: 3 un kati mi diye kontrol etme
//**************************************** */

const katMi = (sayi) => (sayi % 3 == 0 ? "3'un kati" : "3'un kati degil");

console.log(katMi(5));

//* Örnek3:Menu fonksiyon
// ! ok(arrow) fonksiyonunda birden fazla ifade varsa, fonksiyonda süslü parantez kullanmalıyız
//****************************

const menu = () => {
  console.log("===========================");
  console.log("     JAVASCRİPT DERSİ      ");
  console.log("===========================");
};

menu();

// ***Ornek3 yas hesapla ***********

const yasHesapla = (tarih) => new Date().getFullYear() - tarih;

//alternatif yol
// const yasHesapla2=(tarih)=>
// {const yas=new Date().getFullYear()-tarih;
// return yas}
// new Date()= bize şu anın tüm tarihini verir. .getFullYear() bu şekilde . ile istediğimiz tarihi çağırabiliriz (dakika saat gün ay vs)


 //* Örnek4:silindirin hacmini hesaplayan fonksiyon
//********************************************************

const hacimHesapla=(r,h) => Math.PI*r*r*h;

// toFixed(a) = virgullu bir sayida, virgulden sonra istedigimiz addette (a) rakam gormemizi saglar
console.log(hacimHesapla(3,5).toFixed(2))

 //* ORNEK5: Girilen n. terimdeki kadar Fibonacci sayisını  yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...

const fibo=(n)=>{

    let fib1=1;
    let fib2=1;
    let siradaki=0;
    for(let i=2 ; 
        i<n ; 
        i++){
            siradaki=fib1 + fib2;
            fib1 = fib2;
            fib2 = siradaki; 
        }
}

fibo(6)