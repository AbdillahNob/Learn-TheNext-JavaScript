// A. FOR OF merupakan Perulangan Baru yg melooping array sj dan object tdk bs di Looping
// forEach dan Map hnya bs me-LOOPING nilai ARRAY dan OBJECT


// 1. for of Array
const data = [20,40,100,54];

// for (let i = 0; i < data.length; i++){
//     console.log(data[i]);
// }

// data.forEach(e => console.log(e))
for(const tampung of data ){
    console.log(tampung);
}




// 2. for of array part 2
const dataMhs = ['Abdillah','Andi Aini','Hanna'];

// for(let i = 0; i<dataMhs.length; i++){
//     console.log(`${dataMhs[i]} Mahasiswa ke-${i + 1}`);
// }
for (const [i,e] of dataMhs.entries()){
    console.log(`${e} Mahasiswa ke-${i + 1}`)
}




// 3. for of string (huruf/huruf di Looping)
const nama1 = 'Abdillah';

for (tampung1 of nama1){
    console.log(tampung1);
}




// 4. Node List

const namaList = document.querySelectorAll('.nama');
// console.log(namaList);
for (li of namaList){
    // console.log(li.textContent);
    console.log(li.innerHTML);
}



// 6. Arguments
function arg(){
    // arguments.reduce( (acc, currentV) => acc += currentV); X krna arguments bkn bgian dri reduce()
    let jumlah =0;
    // arguments.forEach(e => jumlah += e); X krna arguments bkn bgian dri reduce()

    for(tampungArg of arguments){
        jumlah += tampungArg;
    }
    return jumlah
}

console.log(arg(1,2,3,4,5));




// B. FOR IN me-looping object
const dataObject = {
    judul: 'Selamanya',
    penyanyi: 'Vierra',
    umur: 30
}

// for ( tampungO of dataObject ){
//     console.log(tampungO);
// } X karena for of hnya me-LOOPING ARRAY

for ( d in dataObject ){
    console.log(dataObject[m]);
}

