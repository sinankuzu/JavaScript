//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Async Programlama
//? kullanilmasi cok onemlidir.

// ****SENKRON PROGRAMLAMAKTAN ****
// !blocking code
// const bekle = (ms) =>{
//     const start = new Date().getTime()
//     while(new Date().getTime()<start+ms)
//     {}
// }
// console.log("hello");
// console.time("timer1")
// bekle(3000)
// console.timeEnd("timer1");
// console.log("hello naber");

// *Asenkron (setTimeout) 1 seferlik
// ************************/
// setTimeout(()=>{
//     // non-blocking code, macro task kuyruguna girer
// console.log("Selam");

// }, 2000)
// console.log("Aleykum selam")

// setTimeout(() => {
//   // non-blocking code
//   console.log("naber napiyosun");
// }, 3000);
//!Aleyküm Selam- sleam Naber çalışır, 3. nün süresi 1.den azsa, 2-3-1 sırasında çalışır
//!settimeout müsait zamanda ortaya çıkar, onun sırası geçtiğinde alttaki işlemler bitince çalışır


// *Asenkron(setInterval, clearInterval) belli araliklarla durdurulana kadar devam eder. Mesela 1 dakikada bir doviz kurunu guncellemek icin kullanilabilir
// ************************/

//? setInterval non-blocking

// console.log("counter started");
// let counter = 0;
// const interval1 = setInterval(()=>{
// console.log(++counter);
// if(counter == 5){
//     clearInterval(interval1)
// }
// },1000)

// console.log("counter finished");

//? callback hell
