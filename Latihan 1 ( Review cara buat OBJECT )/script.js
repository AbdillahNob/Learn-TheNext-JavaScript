// Cara pembuatan object ad 4 
// 1. Object Literal

// let mahasiswa = {
//     // Property Object
//     nama: 'Abdillah',
//     nim: 202300,
//     energy: 10,

//     // Method Object
//     makan: function(porsi){
//         this.energy += porsi;
//         console.log('Hello ' +this.nama+' Selamat Makan' );
//     },

//     main: function(jam){
//         this.energy -= jam;
//         console.log("Hello " +this.nama+ ' Selamat bermain');
//     }
// }

// 2. Object Function Deklaration

    // function mahasiswa(nama, nim, energy){
    //     // Deklarasi OBJECT
    //     let dataMahasiswa = {};

    //     // Buat Properti OBJECT
    //     dataMahasiswa.nama = nama,
    //     dataMahasiswa.nim = nim,
    //     dataMahasiswa.energy = energy;

    //     // Buat Method OBJECT
    //     dataMahasiswa.makan= function(porsi){
    //         this.energy += porsi;
    //     }

    //     dataMahasiswa.main = function(jam){
    //         this.energy -= jam;
    //     }

    //     return dataMahasiswa;

    // }
    // // Panggil OBJECT
    // var mahasiswa1 = mahasiswa("Abdillah",202300,20);
    // var mahasiswa2 = mahasiswa("Andi Aini",202301,15);


// 3. Constructor
function Mahasiswa(nama, nim, energy){
    // let this = {}
    this.nama = nama,
    this.nim = nim,
    this.energy = energy;

    this.makan= function(porsi){
        this.energy += porsi;
    }

    this.main = function(jam){
        this.energy -= jam;
    }

    // return this;

}

var mahasiswa1 = new Mahasiswa("Abdillah",202300,30);
// 4. Create.object();