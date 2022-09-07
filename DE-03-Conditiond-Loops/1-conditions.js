//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
console.log("-------------------------------------");
console.log("==IF-ELSE IF== 4 Islem Hesap Makinesi");
console.log("-------------------------------------");


// prompt a girilen degerler string olarak algilanir. sayi olsun istiyorsak onune + koymayaliyiz ya da number koymayaliyiz.
// const sayi1 = +prompt("1.sayiyi giriniz");
// const islem = prompt("+,-,/,* islermlerinden birni giriniz");
// const sayi2 = +prompt("2.sayiyi giriniz");
// let sonuc=0

// if(islem=="+"){
//     sonuc = sayi1+sayi2;
// }else if(islem=="-"){
//     sonuc = sayi1-sayi2;
// }else if(islem == "*"){
//     sonuc = sayi1*sayi2;
// }else if(islem == "/"){
//     if(sayi2!=0)
//     {sonuc = sayi1/sayi2;}
//     else{
//         ("yanlis sayi girdiniz");
//     }
// }else{
//     alert("yanlis islem girdiniz");
// }

// console.log(sonuc);

//**ORNEK */

// const yas = 20;
// const cinsiyet="erkek";
// const saglik=true;

// if(yas >= 18 && cinsiyet=="erkek" && saglik==true){
//     console.log("askerlik yapabilir");
// }else{
//     console.log("askerlikten muaf");
// }

//*******SWİTCH-CASE */

console.log("-------------------------------------");
console.log(" *****==SWİTCH-CASE== 4 Islem Hesap Makinesi ****** ");
console.log("-------------------------------------");
// const n1 = Number(prompt("1.Sayiyi Giriniz:"));
// const islem1 = prompt("Islemi giriniz: +,-,*, /");
// const n2 = +prompt("2.Sayiyi Giriniz:");

// let sonuc1=0

// switch (islem1) {
//   case "+":
//     sonuc1 = n1 + n2;
//     break;
//   case "-":
//     sonuc1 = n1 - n2;
//     break;
//   case "*":
//     sonuc1 = n1 * n2;
//     break;
//   case "/":
//     sonuc1 = n1 / n2;
//     break;

//   default:
//     alert("gecersiz islem girdiniz")
//     break;
// }
// console.log(`${n1} ${islem1} ${n2} = ${sonuc1}`);

// const asgariUcret=5500;
// const maas = +prompt("maasinizi giriniz")

// zamliMaas = maas <= asgariUcret ? maas * 1.25 : maas * 1.1;
// console.log(zamliMaas)

const Schuld = +prompt("borcunuzu giriniz")
const gehalt = +prompt("10 aylik maasinizi giriniz")

console.log(gehalt-Schuld >= 5000 ? "kredi alabilir": "kredi alamazsiniz");





