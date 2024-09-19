// Destructuring Assigment membongkar semua nilai ARRAY/OBJECT 

// 1. Bongkar Nilai

const nilai = [10,9,5];
// const nilai1 = nilai[0];
// const nilai2 = nilai[1];
// const nilai3 = nilai[2];

// console.log(nilai3);
const [a,b,c] = nilai;
console.log(a);

// Bila ingin mngambil beberapa elemnt sj 
const nilaiB = [100,500,340,2];
const [d, , , e] = nilaiB;
console.log(e);





// 2. Tukar Nilai pada elemnt array
let a1 = 10;
let b1 = 20;
// console.log(b1);

[b1,a1] = [a1,b1];
console.log(a1);





// 3. Return nilai array
function panggilData(){
    return [100,200]
}   

const [panggil1, panggil2] = panggilData();
console.log(panggil2);





// 4. REST PARAMETER Apbila element dlm array banyak
const data = [1,2,3,4,5];

const [data1,data2, ...values] = data;
console.log(values);




// 5. Destructring OBJECT 
// const namaObject = {
//     nama: "Abdillah",
//     nim: 202300
// }

// const {nama,nim} = namaObject;
// console.log(nama);

const {nama,nim} = { nama: 'Abdillah', nim:202300 }
console.log(nama);



// 6. cara meringkas nama variabel dan nilai default pd variabel Destructuring
// Gabungkan 3 Metode
const dataSingkat = {
    judul: "Haikyuu",
    genre: 'Sport and Comedy',
}

const {judul: j, genre: g, banned= 'Jerman'} = { judul: "Haikyuu",genre: 'Sport and Comedy'};
console.log(j);
console.log(banned)




// 7. Mengirim argument function dalam bentuk OBJECT dan parameternya menerima nilai brdsrkn PROPERTY yg di inginkan
const mahasiswa = {
    id: 2,
    nama: 'Andi Aini',
    nim: 20300,
    jurusan: 'RPL'
}

function mhs({jurusan}){
    return jurusan;
}

const panggilMhs = mhs(mahasiswa);
console.log(panggilMhs);