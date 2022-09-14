//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                       ITERATION IN ARRAYS
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR LOOP
//* ======================================================


const dizi1 = [-5, 15, 22, -4, 45, 78];
const negatifler1 = [];
const pozitifler1 = [];

const dizilereAyir1 = (dizi) => {
  for (let i = 0; i < dizi.length; i++) {
    if (dizi1[i] < 0) negatifler1.push(dizi[i]);
    else pozitifler1.push(dizi[i]);
  }
};
dizilereAyir1(dizi1);

console.log(pozitifler1);
console.log(negatifler1);

//***FOR IN */

const diziler2 = [-5, 15, 22, -4, 45, 78];
const negatifler2 = [];
const pozitifler2 = [];

const dizilereAyir2 = (osman) => {
  for (let i  in osman) {
    if (osman[i] < 0) negatifler2.push(osman[i]);
    else pozitifler2.push(osman[i]);
  }
  console.log(pozitifler2);
  console.log(negatifler2);
};
dizilereAyir2(diziler2);


//* ======================================================
//*                   FOR IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
//* bir dizide saklandığını varsayalım.Bu hayvanları türüne
//* göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//*  ana programa döndürecek fonksiyonu yazınız. Eğer o
//* türden bir hayvan yok ise bulunamadığını yazdırsın.
//*--------------------------------------------------------

const animal = [
  "fil",
  "aslan",
  "deve",
  "fil",
  "kaplan",
  "fil",
  "deve",
  "aslan",
  "aslan",
  "aslan",
];

const userAnimal=prompt("lutfen bir hayvan ismi giriniz");

const findAnimal=(animal, userAnimal)=>{

    let sayac = 0;

    for(let i in animal){
        if(animal[i] == userAnimal)
        sayac++
    }


}

findAnimal(animal, userAnimal)