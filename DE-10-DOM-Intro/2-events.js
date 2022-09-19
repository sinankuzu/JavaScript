//* ======================================================
//*                        EVENTS
//* ======================================================

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

//?METHOD-1 (HTML-INLINE)
//?---------------------------------------------------------------
//! alttaki kod index.html de, görmek için buraya da yazdık
//  <h1 class="header" onmouseover="style.color='black'" onmouseout="style.color='blue'">DOM Temelleri</h1>





// METHOD-3 (SADECE JAVASCRIPT TE YAZILAN YOL)

document.querySelector(".H2").onmouseover = () => {
document.querySelector("#badi").style.backgroundColor = "pink";
};

//* example-2 onclick- ondblclick

const birinci= document.querySelector(".bir");
const ikinci = document.querySelector(".iki");

birinci.onclick=()=>{
    birinci.src = "./img/logo2.png";
    ikinci.src = "./img/js_logo.png";
}

birinci.ondblclick=()=>{
    // birinci.src="./img/dom-olaylar.png";
    // ikinci.src="./img/logo2.png";

    ikinci.src = "./img/logo2.png";
    birinci.src = "./img/js_logo.png";
}

// *example-3 (button onclick)
const buton = document.querySelector("#btn");

buton.onclick=()=>{
    document.querySelector("body").style.backgroundImage="linear-gradient(to right, purple,gray)"

    buton.textContent="SEARCH"
    buton.style.fontSize="30px"
    header.style.color="red"
}

// METHOD-4 (sadece JAVASCRIPT te yazilir- addEventListener())

buton.addEventListener("click", () => {
  document.querySelector("body").style.backgroundImage =
    "linear-gradient(to right, purple,gray)";

  buton.textContent = "SEARCH";
  buton.style.fontSize = "30px";
  header.style.color = "red";
});