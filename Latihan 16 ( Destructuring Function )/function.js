// 1. Return dalam bentuk ARRAY

function kalkulasi(a,b){
    return [a+b,a*b];
}

// Minesnya element yg dkrm ke variabel brdsrkan URUTAN
const [kali,tambah] = kalkulasi(3,5);
console.log(tambah);


// SOLUSI : buat DESTRUCTURING yg return nya dlm bentuk OBJECT
function kalkulasiObject(){
    return {
        nama: 'Abdillah',
        nim: 202300,
        jurusan: 'Teknik Informatika'
    }
}

const {nim, jurusan,nama} = kalkulasiObject();
console.log(jurusan);




// 2. mngirim argument dalam bentuk OBJECT
const Anime = {
    judul: "Mushle",
    genre: 'Comedy, school and Magic',
    harga: 23000,
    lokasi: {
        jerman: "Berlin dan Hamburg",
        jepang: "Tokyo,Yokohama dan Kanagawa",
        indonesia: "Jakarta, Makassar dan Bandung"
    }
}

function anime({judul,genre,harga,lokasi: {jerman,jepang,indonesia}}){
    return `Anime dengan Judul ${judul} yg bergenre ${genre} akan tetapi memiliki harga jual sebesar ${harga}
            dan Penjualanya terdapat di ${indonesia}`;
}

console.log(anime(Anime))
