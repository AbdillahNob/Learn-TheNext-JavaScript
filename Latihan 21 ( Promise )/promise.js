// PROMISE
// Object yg mempresentasikan keberhasilan / kegagalan sebuah event Asynchronus di masa yg akan datangs
// 1. Janji ( Terpenuhi / tdk terpenuhi )
// 2. states ( fullfiled / rejected / pending )
// 3. callback ( resolve / reject / finally )
// 4. Aksi ( then / catch ) = artinya method yg mngkap Callback

// Cth 1 :
// let cekJanji = true;
// const janji = new Promise( (resolve, reject) => {
//     if (cekJanji){
//         resolve("Janji terpenuhi ");
//     }
//     else{
//         reject('Janji tdk terpenuhi');
//     }
// });

// // console.log(janji);

// janji
//     .then(response => console.log(`Ok bro :) ${response}`) )
//     .catch(response => console.log(`Not Bro ! ${response}`));

// Cth 2 :
// let cekJanji2 = true;
// const janji2 = new Promise( resolve =>{
//     if(cekJanji2){
//         setTimeout(() => {
//             resolve('Selamat janji anda terpenuhi');
//         }, 1000);
//     }
//     else{
//         setTimeout(() => {
//             resolve("Maaf janji anda tidak terpenuhi");
//         }, 500);
//     }
// })

// console.log('Mulai');
// // klu in qt bs melihat keterangan pending
// // console.log(janji2.then( response => console.log(`Okmi ${response}`)));

// janji2
//     // ! finally menampilkan pesan pd saat method then dan catch siap digunakan !
//     .finally(() => console.log("Waktu menunggu anda sudah selesai :)"))
//     .then(response => console.log(`Okmi ${response}`))

// console.log('Selesai');

// cth 3
const dataMhs = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        nama: "Abdillah",
        nim: 202300,
        jurusan: "Teknik Informatika",
      },
    ]);
  }, 1000);
});

const dataDosen = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        nama: "Andi Aini",
        nid: 321034,
        bidang: "Pemrograman Mobile",
      },
    ]);
  }, 500);
});

// dataMhs
//     .then(response => console.log(response));

// dataDosen
//     .then(response => console.log(response));

Promise.all([dataMhs, dataDosen]).then((response) => {
  const [mahasiswa, dosen] = response;
  console.log(mahasiswa);
  console.log(dosen);
});
