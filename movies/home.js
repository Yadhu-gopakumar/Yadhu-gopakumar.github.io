var img = document.getElementById('img');
const container = document.getElementById('container');
const btn = document.getElementById('btn');
const input = document.getElementById('input');
var searchTrue = false;

const card = document.querySelector('.movie_card')
const posterPath = "https://image.tmdb.org/t/p/w1280";
const searchUrl = 'https://www.omdbapi.com/?apikey=727bbdc1&s=';
const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";


// function for api handling
getApiResponse = async (url, searchTrue) => {
    try {
        await fetch(url).
            then(res => res.json())
            .then((data) => {
                if (data.Response = false) {
                    errorMsg(data.Error);
                } else {
                    if (searchTrue) {

                        showMovies(data.Search, searchTrue);
                    } else {
                        showMovies(data.results, searchTrue);
                    }
                }
            }
            );
    }
    catch (e) {
        errorMsg('error');
        searchTrue = false;
    }

}
const errorMsg = (msg) => {
    container.innerHTML = '';
    const errormsg = document.createElement('div');
    errormsg.classList.add('errordis');
    errormsg.innerHTML = msg;

    //for preloader showing
    preLoad();
    //appending dynamic results on html
    container.appendChild(errormsg);
}

const showMovies = (data, searchTrue) => {
    container.innerHTML = '';

    if (searchTrue) {
        data.forEach(movie => {

            createItems(movie.Poster, movie.Title, movie.Year);
        });
    }
    else {
        data.forEach(movie => {

            var poster = posterPath + movie.poster_path;
            createItems(poster, movie.title, movie.release_date);

        });
    }
}


// creating movie cards in index page
const createItems = (poster, mtitle, date) => {

    const movie_card = document.createElement('div');
    movie_card.classList.add('movie_card');
    const img_container = document.createElement('div');
    img_container.classList.add('img');
    const img = document.createElement("img");
    const title = document.createElement('div');
    title.classList.add('title');
    const year = document.createElement('div');
    year.classList.add('year');

    title.innerHTML = mtitle;
    year.innerHTML = date;
    img.src = poster;
    img.alt = poster;

    //for preloader showing
    preLoad();
    //appending dynamic results on html
    container.appendChild(movie_card);
    movie_card.appendChild(img_container);
    img_container.appendChild(img);
    movie_card.appendChild(title);
    movie_card.appendChild(year);

}



const pre = document.getElementById('preloader');
window.onload = () => {
    apiCall();

}

//preloader function
const preLoad = () => {
    pre.style.display = 'grid';
    setTimeout(() => {
        pre.style.display = 'none';
    }, 2000);
}
// movie search handler
btn.addEventListener('click', () => {

    var searchNme = input.value;
    if (searchNme != '') {
        var movieSearch = searchUrl + searchNme;
        searchTrue = true;
        getApiResponse(movieSearch, searchTrue);

    }
    searchTrue = false;

});

//default api calling function 
const apiCall = () => {
    preLoad();
    getApiResponse(url, searchTrue);
}

//home page navigatiion 
const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
    input.value = '';
    apiCall();
});
