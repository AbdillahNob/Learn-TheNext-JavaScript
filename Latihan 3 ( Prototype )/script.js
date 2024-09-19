// Konsep Prototype utk menghemat pnggunaan memory krna tdk prlu mmbuat object baru utk sebuah method.

// Construktor
function mahasiswa(nama,nim,energi){
    // let this = Object.create(prototype);
    this.nama = nama,
    this.nim = nim,
    this.energi = energi;
    
    // return this;
}

// // ini Bkn OBJECT, but protoype yg pnya method
mahasiswa.prototype.main = function(jam){
    this.energi -= jam;
}
mahasiswa.prototype.tidur = function(jam){
    this.energi += jam *2;
}
mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi;
}

// didlm Class ad Prototype, jdi CLASS in membungkus PROTOTYPE 
// class mahasiswa{
//     constructor(nama,nim,energi){
//         this.nama = nama;
//         this.nim = nim;
//         this.energi = energi;
//     }
//     makan(porsi){
//         this.energi += porsi;
//     }
//     tidur(jam){
//         this.energi += jam * 2;
//     }
//     main(jam){
//         this.energi -= jam;
//     }
// }

var abdi = new mahasiswa('Abdillah',202300,20);
