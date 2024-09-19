// 1. Object Literal

// let mahasiswa = {
//     nama: 'Abdillah',
//     nim: '202300',
//     energi: 20,

//     makan : function(porsi){
//         this.energi += porsi;
//     },

//     main: function(jam){
//         this.energi -= jam;
//     }

// }

// 2. Object Function Declaration

// function mahasiswa(nama,nim,energi){
//     var dataMahasiswa = {};

//     dataMahasiswa.nama = nama,
//     dataMahasiswa.nim = nim,
//     dataMahasiswa.energi = energi,

//     dataMahasiswa.makan = function(porsi){
//         this.energi += porsi;
//     },

//     dataMahasiswa.main = function(jam){
//         this.energi -= jam;
//     };
//     return dataMahasiswa;
// }

// var mahasiswa1 = mahasiswa('Abdillah',202300,10);

// 3. Constructor
function Mahasiswa(nama,nim,energi){
    this.nama =  nama,
    this.nim = nim,
    this.energi = energi,

    this.makan = function(porsi){
        this.energi += porsi;
    }

    this.main = function(jam){
        this.energi -= jam;
    }
}

var data = new Mahasiswa('Abdillah',202300,10);

