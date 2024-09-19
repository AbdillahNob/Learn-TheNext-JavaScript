// Filter, Map dan Reduce

const angka = [1,5,2,10,-5,8,9,-7];
// const newAngka = [];


// Non Filter dan Map
// for (let i = 0; i < angka.length; i++){

//     if(angka[i] >= 3){
//         newAngka.push(angka[i]);
//     }

// }


// 1. gabungan High Order Function dan  Arrow

// const newAngkaF = angka.filter( nilai => nilai >= 3);
// console.log(newAngkaF);

//  2. Map

// const newAngkaM = angka.map( nilai => nilai * 2);
// console.log(newAngkaM);

//  3. Map mnghitung total nilai dlm sebuah array dgn menghitung 1/1 dari nilai setiap element ke element berikutnya

// const newAngkaR = angka.reduce( (accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngkaR)


// 4. chain
const newAngkaC = angka.filter( nilai => nilai >= 3).map( nilai => nilai * 2).reduce( (acc,currentV) => acc + currentV);
// filter = 5,10,8,9  map = 10,20,16,18   reduce = 64 
// Hasil yg tampil di layar = 64
console.log(newAngkaC);