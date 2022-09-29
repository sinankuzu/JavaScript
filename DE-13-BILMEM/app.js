//* ======================================================================
//*                 Checkout Page Solution
//*map filter, dest,spread=======================================================================
const kargo = 15;
const vergi = 0.18;



let sepettekiler = [
  { name: "Vintage Backpack", price: 34.99, adet: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 40.99, adet: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 69.99, adet: 1, img: "./img/photo3.jpg" },
];

sepettekiler.forEach((urun) => {
  // DESTRUCTURING
  
  const { name, price, adet, img } = urun;

  document.querySelector(
    "#urun-rowlari"
  ).innerHTML += `<div class="card mb-3" style="max-width: 540px;">

  <div class="row g-0">

    <div class="col-md-5">
      <img src=${img} class="img-fluid rounded-start" alt="...">
    </div>

    <div class="col-md-7">

      <div class="card-body">
      
        <h5 class="card-title">${name}</h5>
        
             <div class="ürün-price">
                    <p class="text-warning h2">$
                      <span class="indirim-price">${(urun.price * 0.7).toFixed(
                        2
                      )}</span>
                      <span class="h5 text-dark text-decoration-line-through">${
                        urun.price
                      }</span>
                    </p>
                  </div>

                  
                  <div
                    class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                  >
                    <div class="adet-controller">
                      <button class="btn btn-secondary btn-sm">
                        <i class="fas fa-minus"></i>
                      </button>
                      <p class="d-inline mx-4" id="ürün-adet">${adet}</p>
                      <button class="btn btn-secondary btn-sm">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>

                  </div>

                  <div class="ürün-removal mt-4">
                    <button class="btn btn-danger btn-sm w-100 remove-ürün">
                      <i class="fa-solid fa-trash-can me-2"></i>Remove
                    </button>
                  </div>

                  <div class="mt-2">
                    Ürün Toplam: $<span class="ürün-toplam">${(
                      price *
                      0.7 *
                      adet *
                      adet
                    ).toFixed(2)}</span>
                  </div>
      </div>
    </div>
  </div>
</div>`;
});

//  SILME
document.querySelectorAll(".remove-ürün").forEach(
  (btn) =>
    // ekrandan silme
    (btn.onclick = () => {
      removeSil(btn);
    })
);

function removeSil(btn) {
  btn.closest(".card").remove();

  // diziden silme

  sepettekiler = sepettekiler.filter(
    (ürün) => ürün.name != btn.closest(".card").querySelector("h5").textContent
  );
}

//  ADET DEGISTIRME

adetButon();

function adetButon() {
  //!burada - adet ve + elementlerle işim olduğu için, mesela - ye basınca adet (kardeşi) değişsin istediğim için, minus a ulaşıp ona tıklanınca closest ile parent ına oradan da kardeşine ulaş eksilt diyebiliriz. ya da gerekli elementlerin parent ına ulaşıp çocuklarına adlar verip, artıko adlarla işlem yapabiliriz
  document.querySelectorAll(".adet-controller").forEach((kutu) => {
    const minus = kutu.firstElementChild;
    const adet1 = kutu.querySelector("#ürün-adet");

    minus.onclick = () => {
      // minus adet degisimini
      adet1.textContent = adet1.textContent - 1;

      // sepettekilerde adet degisimini yapalim

      sepettekiler.map((urun) => {
        if (
          urun.name == adet1.closest(".card").querySelector("h5").textContent
        ) {
          urun.adet = Number(adet1.textContent);
        }
      });
      if (adet1.textContent < 1) {
        removeSil(minus);
        alert("devam ederseniz sepetinizden gidicek");
        console.log("naber");
      }

      // urun toplami ekrana bastirma

      adet1.closest(".row").querySelector(".ürün-toplam").textContent = (
        adet1.closest(".row").querySelector(".indirim-price").textContent *
        adet1.textContent
      ).toFixed(2);
    //   toplam = adet1.closest(".row").querySelector(".ürün-toplam").textContent;
    };

    const plus = kutu.lastElementChild;

    plus.onclick = () => {
      adet1.textContent = Number(adet1.textContent) + 1;

      sepettekiler.map((urun) => {
        if (
          urun.name == adet1.closest(".card").querySelector("h5").textContent
        ) {
          urun.adet = Number(adet1.textContent);
        }
      });

      adet1.closest(".row").querySelector(".ürün-toplam").textContent = (
        adet1.closest(".row").querySelector(".indirim-price").textContent *
        adet1.textContent
      ).toFixed(2);
    //   toplam = adet1.closest(".row").querySelector(".ürün-toplam").textContent;
    };
  });
}
// const urunToplam = document.querySelectorAll(".ürün-toplam");


// const toplam = Array.from(urunToplam).reduce(
//   (acc, item) => acc + Number(item.textContent),
//   0
// );
//  const vergiPrice = toplam * vergi;
//  const shipping = toplam > 0 ? kargo : 0;
//  const cardTotal = toplam + shipping + vergiPrice;

//  document.querySelector(".ara-toplam").innerHTML = toplam.toFixed(2);
//  document.querySelector(".vergi").textContent = vergiPrice.toFixed(2);
//  document.querySelector(".kargo").textContent = shipping.toFixed(2);
//  document.querySelector(".toplam").textContent = cardTotal.toFixed(2);

const araToplam = Array.from(ürünToplam).reduce(
    (acc, item) => acc + Number(item.textContent),
    0
  );
  const vergiPrice = araToplam * vergi;
  const shipping = araToplam > 0 ? kargo : 0;
  const cardTotal = araToplam + shipping + vergiPrice;

  document.querySelector(".aratoplam").textContent = araToplam.toFixed(2);
  document.querySelector(".vergi").textContent = vergiPrice.toFixed(2);
  document.querySelector(".kargo").textContent = shipping.toFixed(2);
  document.querySelector(".toplam").textContent = cardTotal.toFixed(2);
}
 
document.querySelector("#odeme-table").innerHTML = `<table class="table">
<body>
<tr>
<th class="text-start">Ara Toplam</th>
<td class="ara-toplam text-end">${toplam}</td>
</tr>
<tr>
<th class="text-start">Vergi (18%)</th>
<td class="text-end">${(toplam * 0.18).toFixed(2)} </td>
</tr>
<tr>
<th class="text-start">Kargo</th>
<td class="text-end">${kargo}</td>
</tr>
<tr>
<th class="text-start">Toplam</th>
<td class="text-end">${((toplam * 1.18) + kargo).toFixed(2)}</td>
</tr>
</body>


`;
