// 1. JS mncri keyword var dan function, var = undifined dan function = string function sndri
// 2. Apbila function dikrm kn nilai dan tdk memiliki PARAMETER maka functionny akn mncri variabel global

function satu(){
    var nama = 'Abdillah';
    console.log(nama);
}
function dua(){
    console.log(nama);
}

console.log(nama);
// variabel global
var nama = 'Andi Aini';
satu();
dua('Abuuu');
console.log(nama);

