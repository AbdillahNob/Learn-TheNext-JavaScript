// Contoh kasus Template Literals

// 1. Panggilan nilai dalam object

// const data = {
//     nama: 'Abdillah',
//     nim: 202300
// }

// const el = (`
//     <div>
//         <ul>
//             <li>Nama : ${data.nama}</li>
//             <li>Nim : ${data.nim}</li>
//         </ul>
//     </div>
// `);




// 2. Bila Data lbh dari satu
// Di dalam ARRAY ada OBJET
// const dataMhs = [
//     {
//     nama: "Abdillah",
//     nim: 202300,
//     jurusan: 'Teknik Informatika'
//     },

//     {
//     nama: "Andi Aini",
//     nim: 202301,
//     jurusan: 'Teknik Informatika'
//     },

//     {
//     nama: "Hanna Ishikawa",
//     nim: 202302,
//     jurusan: 'Sistem Informasi'
//     }
    
// ]

// const el = dataMhs.map(nilai => 
//     `<div>
//         <ul>
//             <li>Nama: ${nilai.nama} </li>
//             <li>Nim : ${nilai.nim}</li>
//             <li>Jurusan : ${nilai.jurusan}</li>
//         </ul>
//     </div>
//     `)
 

// 3. KONDISIONAL
// const dataPenyanyi = [
//     {
//         nama: 'Ayu Ting-ting',
//         judul: 'Cinta 1 Malam',
//         pensiun: 'Sudah Pensiun'
//     },

//     {
//         nama: 'Dewi Persik',
//         judul: 'Keong Racun'
//     }
// ];

// const el1 = dataPenyanyi.map(penyanyi =>`
//     <div>
//         <ul>
//             <li>Nama Penyanyi: ${penyanyi.nama}</li>
//             <li>Judul : ${penyanyi.judul} ( Beliau ${penyanyi.pensiun ? penyanyi.pensiun:'Masih AKTIF'})</li>
//         </ul>
//     </div>    
// `).join("");

// document.body.innerHTML = el1;



// 4. Nested = Percabangan
const dataMhs1 = {
    nama: 'Abdillah',
    nim: 202300,
    semester: 3,
    matkul:[
        'Pemrograman Web',
        'Rekayasa Perangkat Lunak',
        'Struktur Data',
        'Javascript DOM'
    ]
}


function matkulKuliah (matkul){
     return `
        <ol>
            ${matkul.map(nilai => `<li>${nilai}</li>`).join("")}
        </ol>
     `;
}



const el2 = (`
    <div>
        <h2>Nama Mahasiswa : ${dataMhs1.nama}</h2>
        <span>Nim : ${dataMhs1.nim}</span>
        <p>Jurusan : ${dataMhs1.semester}</p>
        <h4>Matkul</h4>
        ${matkulKuliah(dataMhs1.matkul)}
    </div>
`)

document.body.innerHTML = el2;