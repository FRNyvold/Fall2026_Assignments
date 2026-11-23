// const tab = document.querySelectorAll(".tab");
// const button = document.querySelectorAll(".tab-title")

// button.addEventListener("click", () => {
//  tab.classList.add("active");
// });

const songsList = document.querySelector(".songs__list")

const renderSongs = () => {
  for (let i = 0; i < songs.length; i++) {
    const li = document.createElement("li");
    li.classList.add("songs__card");
    songsList.append(li);

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card__title");
    cardTitle.textContent = songs[i].title;
    li.append(cardTitle);

    const cardArtist = document.createElement("p");
    cardArtist.classList.add("card__artist");
    cardArtist.textContent = "By" + " " + songs[i].artist;
    li.append(cardArtist);

    const cardDuration = document.createElement("span");
    cardDuration.classList.add("card__duration");
    cardDuration.textContent = songs[i].duration;
    li.append(cardDuration);
  }
};
renderSongs();

// FILTER

// const genreSelect = "";
// const genre = songs.filter((songs) => songs.genre.includes(genreSelect));



// SORT



// songs.sort((a, b) => a.duration - b.duration);
// songs.sort((a, b) => b.duration - a.duration);

//SEARCH

// const searchBar = document.querySelector(".action__search");
// const searchButton = document.querySelector(".search__button");
// const searchTerm = 
// const results = songs.filter((songs) => songs.genre)
