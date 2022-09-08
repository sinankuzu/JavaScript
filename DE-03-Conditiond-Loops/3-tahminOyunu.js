//? : Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler  bildiniz" yazacaktır.

const rastgele = Math.ceil(math.random() * 20);

let hak=5;

while(hak>0){
    const tahmin= +prompt("0-20 arasinda bir sayi giriniz")
    hak--

    if(tahmin==rastgele){
        console.log("tebrikler bildiniz");
        break;
    }
    else if(tahmin<rastgele){
        console.log(`dikkat ${hak} hakkiniz kaldi!`);
        console.log("ARTTIR 📈");
    }
    else{
        console.log(`dikkat ${hak} hakkiniz kaldi!`);
        console.log("AZALT 📉");
    }
}

console.log("oyunu kaybettiniz");
