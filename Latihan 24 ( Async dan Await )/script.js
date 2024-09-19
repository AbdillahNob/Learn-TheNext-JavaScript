// promise jga ASYCHRONUS 

// const panggilPromise = new Promise( resolve => {
//     setTimeout(() => {
//         resolve('SELESAI');
//     }, 2000);
// })

// console.log(panggilPromise);
// panggilPromise
//     .then(coba => console.log(coba));


function panggilPromise(){
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if(waktu < 5000){
            setTimeout(() =>{
                resolve('KEREN');
            },waktu)
        } 
        else{
            reject('Kelamaan BOSKU !');
        }
    })
    
}

// const dataPromise = panggilPromise();
// dataPromise
//             .then(coba => console.log(coba))
//             .catch(coba => console.log(coba));


// await akan menunggu dan hnya mengkap RESOLVE
// try tangkap resolve, catch tngkp reject 
async function panggilData(){
    try{
        const data = await panggilPromise();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

panggilData();