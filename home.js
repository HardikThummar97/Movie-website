var images = [
  "https://fictionhorizon.com/wp-content/uploads/2021/04/First-Trailer-For-The-Tomorrow-War-With-Chris-Pratt.jpg",
  "https://cdn.statically.io/img/i.pinimg.com/originals/52/0c/96/520c967c63954a77c4fef43a4d0319e5.jpg",
  "https://wallpaperaccess.com/full/2776322.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZyHChsd2B-yuS-STGxB187nqUJNW5lai_vgz2gIuGabgtdUdmCLJDkcxOWE5D0T6dCng&usqp=CAU",
  "https://www.moviedownloadr.com/wp-content/uploads/2021/04/The-Little-Things-Movie-Details.jpg",
  "https://lh3.googleusercontent.com/proxy/3FzUWT_lnVdrEcz4sCxYwzfqx3C0xxQ58iL1cTmzMs0qyhSYm5LArf0SHWx3tPNMs2fO8CDSDALBsj3dEWVhC7BCP255NSL0y6yhYrn4qor7cuLAng-QsMR-SKHWGvwHUiZZliVX",
  "https://wallpapercave.com/wp/wp4119887.jpg",
  "https://wallpaperaccess.com/full/1913795.jpg",
  "https://lh3.googleusercontent.com/proxy/UPnLeThxb2R4dswMi2rCKyTdMvYbdY5s81-GGDLo3aYKCrbuKwrpBlpFemcPbcyUkkxFCUfNYgMMLqDW1kADltxrMuFGSc2bKz-vatJUyH2HPK66KL5Oi5-SxOo",
];

// var movies = [
//   {
//     name: "The Tomorrow War",
//     ReleaseDate: "2 July 2021",
//     poster:
//       "https://usveteransmagazine.com/wp-content/uploads/2021/06/tomorrow-war.png",
//     IMDb_rating: 6.6,
//   },
//   {
//     name: "Joker",
//     ReleaseDate: "32 October 2019",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
//     IMDb_rating: 8.4,
//   },
//   {
//     name: "Tenet",
//     ReleaseDate: "4 December 2020",
//     poster:
//       "https://preview.redd.it/0ejkx4azt9851.jpg?auto=webp&s=c7d91264894645955f460da00f6f7282c88b0ff6",
//     IMDb_rating: 7.4,
//   },
//   {
//     name: "Harry Potter and the Philosopher's Stone",
//     ReleaseDate: "12 April 2002",
//     poster: "https://m.media-amazon.com/images/I/715YKSv-XuL._AC_SY679_.jpg",
//     IMDb_rating: 7.6,
//   },
//   {
//     name: "The Little Things",
//     ReleaseDate: "29 January 2021",
//     poster:
//       "data:image/jpeg;base64,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",
//     IMDb_rating: 6.3,
//   },
//   {
//     name: "The Shawshank Redemption",
//     ReleaseDate: "14 October 1994",
//     poster:
//       "https://c8.alamy.com/comp/2DFYRBF/the-shawshank-redemption-2DFYRBF.jpg",
//     IMDb_rating: 9.3,
//   },
//   {
//     name: "Terminator 2: Judgment Day",
//     ReleaseDate: "24 August 1991",
//     poster:
//       "https://c8.alamy.com/comp/T2YBB1/robert-patrick-edward-furlong-arnold-schwarzenegger-linda-hamilton-poster-terminator-2-judgment-day-1991-T2YBB1.jpg",
//     IMDb_rating: 8.5,
//   },
//   {
//     name: "Parasite",
//     ReleaseDate: "31 January 2020",
//     poster:
//       "https://img09.mgo-images.com/image/thumbnail?id=MMV6A09291F0983738466001FA262D389816&ql=70&sizes=310x465",
//     IMDb_rating: 8.6,
//   },
//   {
//     name: "The Dark Knight",
//     ReleaseDate: "18 July 2008",
//     poster:
//       "https://mypostercollection.com/wp-content/uploads/2018/08/The-Dark-Knight-Poster-2018-MyPosterCollection.com-1.jpg",
//     IMDb_rating: 9.0,
//   },
// ];

async function getMovie() {
  let title = document.getElementById("t").value;
  let res = await fetch(`http://www.omdbapi.com/?apikey=d23588f&t=${title}`);
  let movies = await res.json();
  // movies = movies.Search;
  console.log("movies:", movies);

  let img = document.getElementById("slideshow-img");
  var div_main = document.getElementById("main");
  if (movies.Error == undefined) {
    img.src = movies.Poster;

    div_main.innerHTML = null;

    // movies.forEach(function (el) {
    let div = document.createElement("div");

    // let poster = document.createElement("img");
    // poster.src = movies.Poster;

    let p_name = document.createElement("h3");
    p_name.innerHTML = movies.Title;

    let p_genre = document.createElement("p");
    p_genre.innerHTML = `Genre: ${movies.Genre}`;

    let p_language = document.createElement("p");
    p_language.innerHTML = `Language: ${movies.Language}`;

    let p_rating = document.createElement("p");
    p_rating.innerHTML = `IMDb Rating: ⭐ ${movies.imdbRating}`;

    let p_date = document.createElement("p");
    p_date.innerHTML = `Release Date: ${movies.Released}`;

    let p_plot = document.createElement("p");
    p_plot.innerHTML = `Plot: ${movies.Plot}`;

    div.append(p_name, p_genre, p_language, p_rating, p_date, p_plot);

    div_main.append(div);
  } else {
    div_main.innerHTML = null;
    img.src =
      "https://media3.giphy.com/media/j9XoexYMmd7LdntEK4/giphy.gif?cid=ecf05e47yj6z7g6tfkcyejtl2c85peyokfo58s57yhje0353&rid=giphy.gif&ct=g";
  }
  // });
}

// let movieArr = localStorage.getItem("movies");
// if (movieArr == null) {
//   localStorage.setItem("movies", JSON.stringify(movies));
// }

var body = document.querySelector("body");

// function slideShow() {
//   let img = document.getElementById("slideshow-img");

//   img.src = images[0];

//   let i = 0;

//   setInterval(function () {
//     if (i == images.length) {
//       i = 0;
//     }
//     img.src = images[i];
//     i++;
//   }, 3000);
// }
// slideShow();

// function sorting() {
//   let div_sort = document.createElement("div");
//   div_sort.setAttribute("id", "sort");

//   let btn1 = document.createElement("button");
//   btn1.innerHTML = "Sort by Rating ▲";
//   btn1.addEventListener("click", sortLH);

//   let btn2 = document.createElement("button");
//   btn2.innerHTML = "Sort by Rating ▼";
//   btn2.addEventListener("click", sortHL);

//   div_sort.append(btn1, btn2);

//   body.append(div_sort);
// }
// sorting();

// function sortLH() {
//   let movies = JSON.parse(localStorage.getItem("movies"));
//   console.log("movies:", movies);

//   movies.sort(function (a, b) {
//     return a.IMDb_rating - b.IMDb_rating;
//   });

//   localStorage.setItem("movies", JSON.stringify(movies));

//   window.location.reload();
// }

// function sortHL() {
//   let movies = JSON.parse(localStorage.getItem("movies"));
//   console.log("movies:", movies);

//   movies.sort(function (a, b) {
//     return b.IMDb_rating - a.IMDb_rating;
//   });

//   localStorage.setItem("movies", JSON.stringify(movies));

//   window.location.reload();
// }

// function showMovies() {
//   var div_main = document.createElement("div");
//   div_main.setAttribute("id", "main");

//   let movies = JSON.parse(localStorage.getItem("movies"));

//   movies.forEach(function (el) {
//     let div = document.createElement("div");

//     let poster = document.createElement("img");
//     poster.src = el.poster;

//     let p_name = document.createElement("p");
//     p_name.innerHTML = el.name;

//     let p_rating = document.createElement("p");
//     p_rating.innerHTML = `IMDb Rating: ⭐ ${el.IMDb_rating}`;

//     let p_date = document.createElement("p");
//     p_date.innerHTML = `Release Date: ${el.ReleaseDate}`;

//     div.append(poster, p_name, p_rating, p_date);

//     div_main.append(div);
//   });

//   body.append(div_main);
// }
// showMovies();
