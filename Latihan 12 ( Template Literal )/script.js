// Template Literal 
// ${Expression} artinya bs berupa variabel, proses dan function

const cerita = `Saya adalah seorang Programmer,
dan nama saya adalah Abdillah P Al-Iman
lalu saya bercita-cita ingin mnjdi seorang SOFTWARE ENGGINER ( Back End Developer )
serta cita-cita lainnya saya ingin menciptkan lapangan pekerjaan bagi orang lain`;
console.log(cerita);


const dataAbdi = {
    nama : 'Abdillah',
    tahunLahir : 2002
}

let istri = 'Andi Aini';

console.log(`Seorang Mahasiswa yg bernama ${dataAbdi.nama} yg ber-umur ${2024 - dataAbdi.tahunLahir} ingin menikah dengan ponakannya yg bernama ${istri}`);

// HTML

let el = (`
    <div>
        <h1>${dataAbdi.nama}</h1>
        <span>${dataAbdi.tahunLahir}</span>
    </div>
`);

console.log(el);
