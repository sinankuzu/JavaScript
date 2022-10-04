//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//?! Bu baglamda syntatic sugar benzetmesi yapilabilir.

//* Bir fonksiyonu async  hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durdurulmasini saglar. Yapilan istek yerine getirilip sonuc
//* degerlerinin dondurulmesi ile kodun calismasi devam eder.
//! JavaScript try anahtar kelimesi kod bloğundaki kodları çalışma zamanında test etmek için kullanılır.

//! JavaScript catch anahtar kelimesi çalışma zaman hatası sonucu oluşan hataları ekrana yazdırmak için kullanılır.

//! JavaScript throw anahtar kelimesi özel hata oluşturmayı sağlar.

//! JavaScript finally anahtar kelimesi hata oluşması veya oluşmaması durumunda çalışacak kodları yazdırmak için kullanılır.

const girlsDiv = document.querySelector(".users");

const getUsers = async () => {
  try {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=girls");

    if (!response.ok) {
      throw new Error(`Biraz hata var : ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    ekranaBastır(data);
  } catch (error) {
    console.log(error);
    console.log("try catch sayesinde devam");
  } finally {
    console.log("iyi kötü kod çalıştı");
  }
};
getUsers();

const ekranaBastır = (data) => {
  data.forEach((girls) => {
    girlsDiv.innerHTML += `
<h2 class="text-success">Name: ${girls.show.name}</h2>
<img src=${girls.show.image.medium} width="40%"/>
<h3 class="fst-italic">${girls.show.genres}</h3><br/>

`;
  });
};
