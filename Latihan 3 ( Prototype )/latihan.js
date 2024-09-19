function mahasiswa(nama,nim,energi){
    this.nama = nama,
    this.nim = nim,
    this.energi = energi;
}

mahasiswa.prototype.main = function(jam){
    this.energi -= jam; 
}
mahasiswa.prototype.tidur = function(jam){
    this.energi += jam * 2;
}
mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi;
}

var abdi = new mahasiswa('Abdi',202300,20)