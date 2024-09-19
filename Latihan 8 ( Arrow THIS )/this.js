
// Object Constructur
// konsep THIS tdk bs di-gunakan utk function ARROWS, jdi arrow akn mncri this ke lokal parent trdktnya.
// Exspression function mncri nilai trdktny-local parent dan trkhir di window, 
// Declaration Functio mncri nilai di lokal lalu ke window
// 1. Constructor
const Mahasiswa = function(){
    this.nama = 'Abdillah',
    this.umur = 19,

    this.methodUmur = () => {
        return ('Hallo ' +this.nama+ ' Umur Anda ' +this.umur);
    };
}

let Mahasiswa1 = new Mahasiswa();

// // 2. Object Literal Undifined krna object literal nd pki konsep THIS
// const Data = {
//     nama : 'Abdillah',
//     nim : 202300,

//     methodPanggil: () => 
//         console.log('Selamat Datang ' +this.nama)
    
// }

// 3. Object Constructor yg method-nya pki function declaration
// const Mahasiswa2 = function(){
//     this.nama = 'Andi Aini',
//     this.nim = 202301,
//     this.umur = 14,

//     this.ubahUmur = () => {
//         this.umur = this.umur-1; 
//         console.log(this.umur);
//     }

//     // fungsi ini brguna utk mlkukan mengulang nilai dgn wktu trtentu
//     setInterval( () => {
//         console.log(this.umur++);
//     }, 1000);

// }

// const panggilMahasiswa2 = new Mahasiswa2();
