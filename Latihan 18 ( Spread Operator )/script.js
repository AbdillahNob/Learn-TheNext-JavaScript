// Spread adalah Menggabungkan beberapa array mnjadi 1 array
// 1. How ti use SPREAD

const mahasiswa = ['Abdillah','Andi Aini','Hanna Ishikawa'];
const dosen = ['sandhika','nurul ilmu','john carter'];
const data = [...mahasiswa, ...dosen];

// Menambahkan nilai di tengah spread array
const dataTengah = [...mahasiswa, 'Milano', ...dosen];

console.log(dataTengah);




// 2. Copy 
const mahasiswaCopy = [...mahasiswa];
mahasiswaCopy[0] = 'Arika';
console.log(mahasiswa);
console.log(mahasiswaCopy);



// 3. mngmbil nilai pd html lalu di LOOPING
const nameLi = document.querySelectorAll('li');

// for(let i = 0; i<nameLi.length; i++){
//     console.log(nameLi[i].textContent);
// }
// nameLi.forEach(e => console.log(e.innerHTML));

const ulang = [...nameLi].map(e => e.textContent);
console.log(ulang);




// 4. Implementasi ke CSS
const nama = document.querySelector('.nama');
const pecah = [...nama.textContent].map( e => `<span>${e}</span>` ).join("");

nama.innerHTML = pecah;
