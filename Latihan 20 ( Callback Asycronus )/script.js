// 1. Sycronus CallBack


// function panggilNama(callBack){
//     const namaC = prompt("Masukkan Nama Anda : ");
//     callBack(namaC);

// }

// panggilNama(nama => alert(`Halo ${nama}`));


// const dataMhs = [
//     {   
//         nama: 'Abdillah P Al-Iman',
//         nim: 202300,
//         jurusan: 'Teknik Informatika'
//     },
    
//     {   
//         nama: 'Andi Aini',
//         nim: 202301,
//         jurusan: 'Teknik Informatika'
//     },
    
//     {   
//         nama: 'Hanna Ishikawa',
//         nim: 202303,
//         jurusan: 'Rekayasa Perangkat Lunak'
//     }
// ]

// // ! Synchronus menunggu proses eksekusi kode hngga selesai baru lanjut ke kode selanjutnya !
// console.log('Mulai');

// // Destructuring ( di PARAMETER Pecahkan Objectny lalu ambil property-nya )
// dataMhs.forEach(({nama,nim}) => {

//             for (let i =0; i< 10000000; i++){
//                 let date = new Date();
//             }

//         console.log(`Hai ${nama} anda memiliki Nim : ${nim}`)
//         }
//     );
// console.log('Selesai');






// 2. ASYNCHRONUS CALLBACK
// A. Ajax / Vanila Javascript (Javascript Murni )
// function getDataMahasiswa(url, succes, error){
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 succes(xhr.response);
//             }else{
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(e => console.log(e.nama));
// }, )

// console.log('selesai')







// B. JQUERY
console.log('Mulai')
$.ajax({
    url: 'data/mahasiswa.json',
    succes: (mhs) => {
        mhs.forEach( m => console.log(m.nama));
    },
    error: (e) =>{
        console.log(e.responseText);
    }
    
});
console.log("Selesai");