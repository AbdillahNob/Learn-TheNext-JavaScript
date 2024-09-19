
// Js mnganut Function Scope jdi variabel dlm function baru bs berubah jdi V lokal
    for(let i = 0; i < 10; i++){
        console.log(i);
    }        

// let dan const mnganut Block Scope jdi dlm block berubah mnjd V Lokal  
// const tdk bs di ubah nilainya kecuali object aslkn property tdk di ubah dan array pki .push(value);

// console.log(i);

const data = [1,2,3];
data.push(5);
console.log(data);

const data1 = {
    nama : 'Abdillah',
    nim : '202300'
}
console.log(data1);

// data1 = {email : '@badillsa'};
data1.nama = 'Andi Aini';
console.log(data1);
