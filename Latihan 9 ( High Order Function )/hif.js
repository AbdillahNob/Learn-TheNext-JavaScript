// High Order function adalah Function yg memiliki nilai Parameter/Argument dan return dalam bentuk function
// dan Function yg di pnggl di dlm parameter/argument dan return di sebut CALLBACK

const data = function(nama, umur){

    return console.log("Selamat " +nama+ " Umur anda " +umur);
}

function umur (){
    umuur = 20;
    return umuur;
}

data('Abdillah', umur());


const dataMhs = function(nama, urutan, action){
    for(let i = 0; i < urutan; i++ ){
        // console.log("Nama Anda " +nama+ " Jumlah Nilai Anda " +urutan);
        action(i);
    }

}

function urutan (nilai){
    jmlhUrutan = nilai;
    return jmlhUrutan;
}


dataMhs('Andi Aini', urutan(10), console.log);
dataMhs('Hanna ', urutan(5), alert)