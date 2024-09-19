// Ketika diklik Tombol SEARCH
$('.key-button').on('click', function(){
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=a4ffccec&s=' + $('.input-keyword').val(),
        success: results=> {
          const movies = results.Search;
          let cards = '';
          movies.forEach( m => {
            cards =+ moviesDetails(m);
          })
          $('.movie-container').html(cards);
    
    
    
            //  Ketika diklik tombol Detail 
          $('.model-detail-button').on('click', function(){
            $.ajax({
                url: 'http://www.omdbapi.com/?apikey=a4ffccec&i=' + $(this).data(imbdid),
                success: m => {
                    const movieDetails = movieDetailsModel(m);
                    $('.modal-body').html(movieDetails);    
                },
                error: (e) => 
                    console.log(e.responseText)
            })
          })
    
    
        },
        error: (e) => 
            console.log(e.responseText)
    })
    
})





function movieDetails(m){
    return `<div class="col md-4 my-5">
                    <div class="card" style="width: 18rem;">
                        <img src="${m.Poster}" class="card-img-top" alt="">
                        <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 card-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary" model-detail-button data-bs-toggle="modal" 
                            data-bs-target="moviesModals" data-imbdid="${m.imbID}">Details</a>
                        </div>
                    </div>
                    </div>`;


}

function movieDetailsModel(m){
    return `<div class="container-fluid">
        <div class="row">
            <div div class="col-md-3">
                <img src="" class="img-fluid">
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
    </div>`

}