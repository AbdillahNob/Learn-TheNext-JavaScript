// 1. JQUERY

// Ketika diklik Tombol SEARCH
// $('.key-button').on('click', function(){
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=a4ffccec&s=' + $('.input-keyword').val(),
//         success: results=> {
//           const movies = results.Search;
//           let cards = '';
//           movies.forEach( m => {
//             cards =+ showMovie(m);
//           })
//           $('.movie-container').html(cards);
    
    
    
//             //  Ketika diklik tombol Detail 
//           $('.model-detail-button').on('click', function(){
//             $.ajax({
//                 url: 'http://www.omdbapi.com/?apikey=a4ffccec&i=' + $(this).data(imbdid),
//                 success: m => {
//                     const movieDetails = showMovieDetails(m);
//                     $('.modal-body').html(movieDetails);    
//                 },
//                 error: (e) => 
//                     console.log(e.responseText)
//             })
//           })
    
    
//         },
//         error: (e) => 
//             console.log(e.responseText)
//     })
    
// })




// 2. FETCH = ini berbentuk PROMISE()

// A. KLIK Tombol SEARCH
const searchButton = document.querySelector('.key-button');
searchButton.addEventListener('click', async function (){

    // Ambil nilai dari html yg di INPUT USER
    const inputKeyword = document.querySelector('.input-keyword');
    // lalu nilainy dimasukkan ke API
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
});



// A-1 Ketika tombol DETAIL klik
// .targer (ambil element html-nya)
// EVENT BINDING
document.addEventListener('click', async function(e){
    if(e.target.classList.contains('model-detail-button')){
        const imbdid = e.target.dataset.imbdid;
        const movieDetails = await getMovieDetails(imbdid);
        updateUIDetails(movieDetails);
    }
})





// B. Ambil data API brdsrkn inputan user
function getMovies(movies){
    return fetch('http://www.omdbapi.com/?apikey=a4ffccec&s=' + movies)
    // JSON menyimpan dan mentransfer data di ambil dri API
    .then(response => response.json())
    .then(response => response.Search);
}



// B-1
function getMovieDetails(imbdid){
    return fetch('http://www.omdbapi.com/?apikey=a4ffccec&i=' + imbdid)
    .then(response => response.json())
    .then(e => e);
}



// C. Masukkan dan tampilkan nilai dari setiap ELEMENT object ke html
function updateUI(movie){
    let dataMovies = '';
    movie.forEach( e => dataMovies += showMovie(e));
    // Ambil element html dgn class movie-container
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = dataMovies;
}



// C-1
function updateUIDetails (e){
    const dataDetail = showMovieDetails(e);
    const detailsContainer = document.querySelector('.modal-body');
    detailsContainer.innerHTML = dataDetail;
}




function showMovie(m){
    // target = "#movieModal" utk menarget id MODAL  
    return `<div class="col md-4 my-5">
                    <div class="card" style="width: 18rem;">
                        <img src="${m.Poster}" class="card-img-top" alt="">
                        <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 card-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary model-detail-button" data-bs-toggle="modal" 
                            data-bs-target="#moviesModals" data-imbdid="${m.imdbID}">Details</a>
                        </div>
                    </div>
                    </div>`;


}

function showMovieDetails(m){
    return `<div class="container-fluid">
        <div class="row">
            <div div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid">
            </div>

            <div class="col-md">
                <ul class="list-group">
                <li class="list-group-item">
                    <h4>${m.Title} (${m.Year})</h4>
                </li>
                <li class="list-group-item">Director : ${m.Director}</li>
                <li class="list-group-item">Actors : ${m.Actors}</li>
                <li class="list-group-item">Writer : ${m.Writer}</li>
                <li class="list-group-item">Plot : ${m.Plot}</li>
                </ul>
            </div>

        </div>
    </div>
    `;
    

}