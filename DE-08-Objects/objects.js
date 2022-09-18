//* ======================================================
//*                 NESNELER (OBJECTS)
//* ======================================================

//? Diziler (Arrays) sıralı bellek yapısıdır. Böylece, onlara indeksleyerek erişebiliriz.
//? Object leri daha karmaşık (yapılandırılmamış) bellek ihtiyaçları için kullanabiliriz

//?  herhangi bir veriye erişmek için Key-value (property-value) kullanılır

//! We can create an object with 3 methods
//* ---------------------------------------------------------
//* 1-   Object (new) örneği oluşturalım
//* ---------------------------------------------------------

const cars = new Object();

cars.name = "BMW";
cars.engine = 1.6;
cars.model = 2000;

console.log(cars);

console.log(cars.name, cars.engine);

console.log(cars["name"]);

//* ---------------------------------------------------------
//* 2-  object constructor kullanalım
//* ---------------------------------------------------------

function Calisanlar(id, name, salary) {
  this.empId = id;
  this.empName = name;
  this.empSalary = salary;
  console.log(this);
}
const kisi1 = new Calisanlar(101, "Mehmet", 7000);
console.log(kisi1);

//* ---------------------------------------------------------
//* 3- Object literal (En Çok Kullanılan Yol)
//* ---------------------------------------------------------

const person = {
  name: "Johny",
  surname: "Deep",
  age: 55,
  job: "actor",
  languages: ["C", "C++", "PHYTON", "JAVA"],
};

console.log(person);
console.log(person.name);
console.log(person["age"]);
console.log(person["age"]);
console.log(person.languages[2]);

person.location = "America";
person.age = 45;

console.log(person);

//* ---------------------------------------------------------
//*           Objects teki yöntemler
//* ---------------------------------------------------------

const mensch = {
  name: "Johny",
  surname: "Deep",
  birth: 1970,
  job: "actor",
  hasDriverLicense: true,

  yasHesapla: function () {
    //!buradaki console.log tamamen çalışma sırasını görmek için yazdım
    // console.log(this);

    return new Date().getFullYear() - this.birth;
  },

  özet: function () {
    // console.log(this);
    return `${this.name} ${this.yasHesapla()} yasındadır `;
  },
};

console.log(mensch.yasHesapla());
console.log(mensch.özet());
console.log(mensch);
console.log(mensch.name);

//!NOTE: arrow functions ın sözcüksel bağlamı vardır. Yani this keyword ü bir arrow function içinde kullanırsak beklenmedik değerler alabiliriz. Bir object in içindeki this keyword ü, global scope u (window) ifade ettiği için. this value nun global scope a bağlanmasını önlemek için, object yöntemi içindeki normal function u kullanın.

// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================
// key lerin belirli bir sırası (index) olmadığı için object araması daha tutarlı bir arama performansına sahip olacaktır. Ayrıca diziler arasında döngü yapmak, keys arasında döngü yapmaktan daha hızlıdır, bu nedenle tüm öğeler üzerinde işlem yapmayı planlıyorsanız, bunları bir diziye koymak akıllıca olabilir. 
const people = [
  {
    name: "Mustafa",
    surname: "Gertrud",
    job: "developer",
    age: 30,
  },
  {
    name: "Halo",
    surname: "Müller",
    job: "tester",
    age: 35,
  },
  {
    name: "Mehmet",
    surname: "Rosenberg",
    job: "team lead",
    age: 40,
  },
  {
    name: "Ozkul",
    surname: "Gutenberg",
    job: "developer",
    age: 26,
  },

  {
    name: "Baser",
    surname: "Shaffer",
    job: "tester",
    age: 24,
  },
];
console.log(people);

//*ornek1: people dizisindeki job ları göster

people.forEach((p)=>console.log(p["name"],p.job) )

//*ornek2: yasları 1 er arttır sonucu yeni diziye aktar
 const yas=people.map((a) =>  a.age + 1);
console.log(yas);

// yasları 1 er arttır sonucu dizide kalıcı değiştir
 people.map((süslü,i,array)=>array[i].age=süslü.age+1)

 console.log(people);

 //*ornek3: yası 33 ün üstünde olan kişilerin name lerini listele

  people.filter((a)=> a.age>33).forEach((a)=>console.log(a.name) )


//*ornek4: her elemanın name ini büyük harfe döndür ve yaslarını 5 arttırarak yeni bir nesne oluşturun

 const yeni= people.map((a)=>({
name1:a.name.toUpperCase(),
age1:a.age+5,
job1:a.job
}))

console.log(yeni);
console.log(people);
  
//* ornek5: Developer olanların adlarını ve yaşlarını yeni bir object olarak saklayın

const newObject = people
  .filter((p) => p.job == "developer")
  .map((a) => ({
    newName: a.name,
    newAge: a.age,
    
  }));

console.log(newObject);
