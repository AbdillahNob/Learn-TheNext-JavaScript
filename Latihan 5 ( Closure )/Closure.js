// Panggil; = fungsinya hanya dipanggil
// Panggil(); = fungsinya di jalankan


// 1. Faktories Function
function init(waktu){
    // let nama = 'Abdillah';

    // Inner Function
    return function(nama){
        console.log("Selamat Pagi "+waktu+ " Tuan " +nama);
    }
    // return Panggil;
}

let panggilSiang = init('Siang');
let panggilMalam = init('Malam');
// Agrument in akan dkrm ke parameter dri child/Fungsi ddlm init();
panggilSiang('Abdillah');
panggilMalam('Abdillah');

panggilSiang('Andi Aini');
panggilMalam('Andi Aini');






let angka = (function(){
    // CLOSURE artinya mempertahakn nilai lokal tnpa di pengaruhi oleh nilai luar
    let number = 0;

    return function(){
        return ++number;
    }
}());

number = 100;

// Agar INNER fungsinya jga dijlnkan
console.log(angka());
console.log(angka());
console.log(angka());
console.log(angka());

