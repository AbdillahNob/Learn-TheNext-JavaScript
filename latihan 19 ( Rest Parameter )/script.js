// Rest Parameters = menerima nilai dgn jumlah ELEMENT yg tak terbtas/ > 1, sehingga mnjdi DINAMISS dan bentuk OBJECT
// 1. ...values 

function panggilAngka(...argNilai){
    let jumlah = 0;
    for ( const a of argNilai ){
        jumlah += a;
    }

    return jumlah;
}

console.log(panggilAngka(1,20,56,100));


// 2. Destructuring and Rest Parameter utk Array
const kelompok = ['Abdillah','Andi Aini','Hanna'];
const [ketua, ...anggota] = kelompok;
console.log(anggota);



// Destructuring and Rest Parameter utk OBJECT
const basket ={
    pointGuard: 'Alifu',
    shootingGurad: 'Abdillah',
    powerForward: 'Jamal',
    smallForward: 'Fauzan',
    center: 'farhan'
}

const {shootingGurad, powerForward, ...tim} = basket;
console.log(tim);






// 3. Destructuring and Rest Parameter utk FILTER

function tipeData(tipe, ...values){
    return values.filter(e => typeof e == tipe)
}

console.log(tipeData('string',202300,'Abdi','boolean',true,'Andi Aini',20,false));

