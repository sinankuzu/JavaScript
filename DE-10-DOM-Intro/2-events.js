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