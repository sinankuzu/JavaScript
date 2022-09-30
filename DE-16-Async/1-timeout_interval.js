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
// *Asenkron(setInterval, clearInterval) belli araliklarla durdurulana kadar devam eder. Mesela 1 dakikada bir doviz kurunu guncellemek icin kullanilabilir
// ************************/
