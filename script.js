'use strict';

let gizliSayi = Math.trunc(Math.random() * 20) + 1;
let puan = 20;
let yuksekPuan = 0;

const mesajGoruntule = function (mesaj) {
    document.querySelector('.mesaj').textContent = mesaj;
};

document.querySelector('.kontrol').addEventListener('click', function () {
    const tahmin = Number(document.querySelector('.tahmin').value);
    console.log(tahmin, typeof tahmin);



    if (!tahmin) {

        mesajGoruntule('⛔️ Sayı yok!');
    }
    else if (tahmin === gizliSayi) {

        mesajGoruntule('🎉 Doğru sayı');
        document.querySelector('.sayi').textContent = gizliSayi;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.sayi').style.width = '30rem';
        if (puan > yuksekPuan) {
            yuksekPuan = puan;
            document.querySelector('.yuksekPuan').textContent = yuksekPuan;
        }
    } else if (tahmin !== gizliSayi) {
        if (puan > 1) {

            mesajGoruntule(tahmin > gizliSayi ? '📈 Yüksek' : '📉 Düşük!');
            puan--;
            document.querySelector('.puan').textContent = puan;
        } else {

            mesajGoruntule('💥 Oyunu kaybettiniz!');
            document.querySelector('.puan').textContent = 0;
        }

    }


});
document.querySelector('.tekrar').addEventListener('click', function () {
    puan = 20;
    gizliSayi = Math.trunc(Math.random() * 20) + 1;


    mesajGoruntule('Başla!');
    document.querySelector('.puan').textContent = score;
    document.querySelector('.sayi').textContent = '?';
    document.querySelector('.tahmin').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.sayi').style.width = '15rem';

});
