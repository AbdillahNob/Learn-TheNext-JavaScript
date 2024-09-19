// Arrow Function
// Function Ekpression

// 1.
let data = (nama) => {return 'Hello ' +nama;}
console.log(data('Abdillah'));

// 2.
let data1 = nama => 'hello '+nama;
console.log(data1('Andi Aini'));

// 3. 
let data2 = (nama,waktu) => 'Selamat ' +waktu+ ' Tuan ' +nama;
console.log(data2('Abu Bakar','Siang'));

// 4. 
let data3 = (nama,waktu) => console.log('Selamat ' +waktu+ ' Tuan ' +nama);
data3('Hanna','Malam');


const dataMhs = ['Abdillah','Yurika',"Semi"];

// Function Normal
// let panggilMhs = dataMhs.map(function (nama){
//     return ({nama, jmlhNilai: nama.length});
// })

// ({}) symbol utk return nilai dlm bentuk objek
let panggilMhs = dataMhs.map(nama => ({nama, panjangNilai: nama.length}))

console.table(panggilMhs);