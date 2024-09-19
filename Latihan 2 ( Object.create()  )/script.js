// Object.create();


let objectPerilaku = {
    makan : function(porsi){
        this.energi += porsi;
    },
    main : function(jam){
        this.energi -= jam;
    },
    tidur : function(jam){
        this.energi += jam * 2;
    }
}

// Function Deklaration dihubungkan dgn object lain mnggunkan metode Object.create();
function mahasiswa(nama,nim,energi){
    let dataMahasiswa = Object.create(objectPerilaku);
    dataMahasiswa.nama = nama,
    dataMahasiswa.nim = nim,
    dataMahasiswa.energi = energi;

    // dataMahasiswa.makan = objectPerilaku.makan,
    // dataMahasiswa.tidur = objectPerilaku.tidur,
    // dataMahasiswa.main = objectPerilaku.main;

    return dataMahasiswa;
}

var abdi = mahasiswa("Abdi",202300,20);