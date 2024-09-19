// Tagged pada Template Literals

const nama = 'Abdillah';
const umur = 20;


// 1. 

// function dataMhs(strings, nama, umur){
//     return umur;
// }

// Jadi nilai string dipecah mnjdi array dan pemisahnya ialah EMBIID EXPRESSION ${nama}
// Solusi nilai string dan expressionnya harus di satukan 

function dataMhs(strings, ...expression ){
    // let gabung = "";
    // strings.forEach((nilaiString, i) => {
    //     gabung += `${nilaiString}${expression[i] || ""} `;

    // })
    // return gabung;

    return strings.reduce((total, element, i) =>`<span class="all">${total}${element}<span class="warna">${expression[i] || ""}</span></span>`, ""); 
}

const data = dataMhs`Nama Saya adalah : ${nama} yg saat ini berumur ${umur} Tahun `;
document.body.innerHTML = data;