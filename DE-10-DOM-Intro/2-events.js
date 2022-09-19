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