const global = {
    currentPage :window.location.pathname,

};
//Show data for Movies
async function displayPopularMovies(){
    const result = await fetchAPIData('/movie/popular');
    //console.log(result);
    const res = result.results
    //console.log(res);
    res.forEach(movie => {
      
        const div = document.createElement("div");
        div.classList.add('card');

        div.innerHTML =`
          <a href="movie-details.html?id=${movie.id}">
           ${
          movie.poster_path ?   `<img
          src="https://image.tmdb.org/t/p/w500${
          movie.poster_path}"
          class="card-img-top"
          alt="${movie.title}"
          ` : `<img
          src="../images/no-image.jpg"
          class="card-img-top"
          alt="Movie Title"`
          }
          </a>
          <div class="card-body">
            <h5 class="card-title">Movie Title</h5>
            <p class="card-text">
              <small class="text-muted" >${movie.release_date}</small>
            </p>
          </div>
        `;

        document.querySelector('#popular-movies').appendChild(div)
    })
    
   
}

//Show data for TV Shows

async function displaypopularTvShows(){

    const result = await fetchAPIData('/tv/popular')
    // console.log(result.results);
    const res = result.results;
    
    res.forEach(tvShow =>{

        const div = document.createElement("div");
        div.classList.add('card');
    
        div.innerHTML =`
             <a href="movie-details.html?id=${tvShow.id}">
           ${
            tvShow.poster_path ?   `<img
          src="https://image.tmdb.org/t/p/w500${
            tvShow.poster_path}"
          class="card-img-top"
          alt="${tvShow.title}"
          ` : `<img
          src="../images/no-image.jpg"
          class="card-img-top"
          alt="Movie Title"`
          }
          </a>
          <div class="card-body">
            <h5 class="card-title">Movie Title</h5>
            <p class="card-text">
              <small class="text-muted" >${tvShow.release_date}</small>
            </p>
          </div>
        `;
        document.querySelector("#popular-shows").appendChild(div)
    })

}

async function displaymovieDetails(){

    const moveId = window.location.search.split('=')[1];
   
    const movie = await fetchAPIData(`movie/${moveId}`);
        console.log(movie);
    const div = document.createElement("div");

    div.innerHTML =`<div class="details-top">
          <div>
             ${
                movie.poster_path ?   `<img
          src="https://image.tmdb.org/t/p/w500${
            movie.poster_path}"
          class="card-img-top"
          alt="${movie.title}"
          ` : `<img
          src="../images/no-image.jpg"
          class="card-img-top"
          alt="Movie Title"`
          }
          </div>
          <div>
            <h2>${movie.title}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
             ${movie.vote_average.toFixed(1)}/10
            </p>
            <p class="text-muted">${movie.release_date}</p>
            <p>
             ${movie.overview}
            </p>
            <h5>Genres</h5>
            <ul class="list-group">
             ${movie.genres.map((genre)=>`<li>${genre.name}</li>`).join('')}
            </ul>
            <a href="${movie.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Movie Info</h2>
          <ul>
            <li><span class="text-secondary">Budget:</span> $${movie.budget}</li>
            <li><span class="text-secondary">Revenue:</span> $${movie.revenue}</li>
            <li><span class="text-secondary">Runtime:</span> ${Math.floor(movie.runtime/60)} Hour : ${(movie.runtime)%60} Minutes}</li>
            <li><span class="text-secondary">Status:</span> Released</li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">${
            movie.production_companies.map((company)=> `<span>${company.name}</span>`).join(', ')
          }</div>
        </div>`;

        document.querySelector("#movie-details").appendChild(div)
}




//fetch data from TMDP API

async function fetchAPIData(endpoint){
    const API_KEY = 'b7245e222a08e634587088e5a69e6041';

    const API_URL = 'https://api.themoviedb.org/3/';

    showSpinner();

    const response = await fetch(
        `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);

    const data =await response.json();
    hideSpinner();
    return data;


}

function showSpinner(){
    document.querySelector('.spinner').classList.add('show');
}

function hideSpinner(){
    document.querySelector('.spinner').classList.remove('show');
}

function highlightActiveLink(){
    const navLink = document.querySelectorAll(".nav-link");
    navLink.forEach((navLinkItem) => {

        if(navLinkItem.getAttribute("href") === global.currentPage){

            navLinkItem.classList.add('active')

        }
        // navLinkItem.addEventListener('mouseover', function(e){
        //     e.preventDefault();

        //     e.target.style.color = 'red';
        // })

        navLinkItem.addEventListener('mouseout', function(e){
            e.preventDefault();

            e.target.style.color= '';
        })
    })
        

    } 
   
    
    



function init(){
    switch(global.currentPage){
        case "/":
        case "index.html":
            displayPopularMovies();
            // console.log('home');
            break;

        case "/shows.html":
            displaypopularTvShows();
            
            break;

        case "/movie-details.html":
            displaymovieDetails();
           // console.log('movie details');
            break;
        
        case "/tv-details.html":
        console.log('tv details');
        break;

        case "/search.html":
            console.log('search');
            break;   
    }

    highlightActiveLink();
}
document.addEventListener("DOMContentLoaded", init);