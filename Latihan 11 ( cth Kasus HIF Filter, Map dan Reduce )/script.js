// ALGORITMA
// 1. Ambil Video
// Array.from(mengubah nilai ke dalam bentuk array)

    const videos = Array.from(document.querySelectorAll('[data-duration'));

// 2. Ambil Video Node Js 
// textContent.includes = ambil nilai dari element yg ddlm trdpt NODE.JS    
    let videoNode = videos.filter(video => video.textContent.includes('NODE.JS'))


   
    
// 3. Ambil Durasi video
// method dataset berfungsi utk mengakses atribut pada html cth akses atribut duration
    .map(item => item.dataset.duration)




// 4. Ubah Durasi video ke-detik
// 
    .map(waktu => {
//      14:30 -> 14,30 = agr trpisah mndji element berbde
//      ubah setiap nilai element yg diambil mnjdi TIPE DATA Float
        const parts = waktu.split(':').map( part => parseFloat(part))

        // Ubah 14 menit ke detik + 30 detik/wktu detikny.
        return (parts[0] * 60) + parts[1];
    })

    


// 5. Jumlah total detik video
// 870 + 110 + 1223 + 1864 + 1134 + 640 + 890 + 448
    .reduce((total,element) => total + element );




// 6. Ubah total detik video ke Jam, Menit dan Detik
    // 1 jam = 3600 detik

    const jam = Math.floor(videoNode / 3600);
    console.log("Jam : "+jam);

    // sisa menitnya
    videoNode = videoNode - jam * 3600;
    
    const menit = Math.floor(videoNode / 60);
    console.log('Menit : '+menit)

    // Sisa detik
    const detik = videoNode - menit * 60;
    console.log('Detik : '+detik);



// 7. Simpan ke Dom
const pDurasi = document.querySelector('.durasi-video');
pDurasi.textContent = jam+ " Jam " + menit + " Menit " +detik+ " Detik";

const jumlahVideo = videos.filter(video => video.textContent.includes('NODE.JS')).length;
const pJmlhVideo = document.querySelector('.jumlah-video');
pJmlhVideo.textContent = jumlahVideo+ ' Videos';


