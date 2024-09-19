let kondisi = function(hasil){

    return function(nama){
        console.log('Selamat Anda ' +hasil+ " Tuan " +nama);
    }
}

let panggilBerhasil = kondisi('Berhasil');
let panggilGagal = kondisi('Gagal');

panggilBerhasil('Abdillah');
panggilGagal('Andi Aini');