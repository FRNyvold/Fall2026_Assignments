function openTab(index) {
  let tabContent = document.querySelectorAll(".tabcontent");
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("active");
  }
  tabContent[index].classList.add("active");
}

document.querySelector("#defaultOpen").click();


// const openTab = (event, tabName) => {
//   const tabContent = document.querySelectorAll(".tabcontent");
//   for (let i = 0; i < tabContent.length; i++) {
//     tabContent[i].style.display = "none";
//   }
//   const tabLinks = document.querySelectorAll(".tablink");
//   for (let i = 0; i < tabLinks.length; i++) {
//     tabLinks[i].classList = tabLinks[i].classList.remove("active");
//   }

//   document.querySelector(tabName).style.display = "block";
//   event.currentTarget.classList += "active";
// };

// const tabLinks = document.querySelectorAll(".tablink");
// tabLinks.addEventListener("click", () => {
//   openTab();
// })

const genreFilter = document.querySelector(".action__filter")
const songsList = document.querySelector(".songs__list")

const renderSongs = (filteredSongs) => {
  songsList.replaceChildren();
  filteredSongs.forEach((song) => {
    const li = document.createElement("li");
    li.classList.add("songs__card");
    songsList.append(li);
  
    const cardImage = document.createElement("div");
    cardImage.classList.add("card__image");
    li.append(cardImage);
  
    const cardIcon = document.createElement("img");
    cardIcon.classList.add("card__icon");
    cardIcon.src = "./assets/icons/disc.svg";
    cardIcon.alt = "Music disc icon";
    cardImage.append(cardIcon);
  
    const cardText = document.createElement ("div");
    cardText.classList.add("card__text");
    li.append(cardText);
  
    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("card__title");
    cardTitle.textContent = `${song.title}`;
    cardText.append(cardTitle);
  
    const cardArtist = document.createElement("p");
    cardArtist.classList.add("card__artist");
    cardArtist.textContent = "By" + " " + `${song.artist}`;
    cardText.append(cardArtist);
  
    const cardDuration = document.createElement("span");
    cardDuration.classList.add("card__duration");
    cardDuration.textContent = `${song.duration}`;
    cardText.append(cardDuration);
  
    const cardButton = document.createElement("button");
    cardButton.classList.add ("card__button");
    li.append(cardButton);
  
    const buttonIcon = document.createElement("img");
    buttonIcon.src = "./assets/icons/circle-plus.svg";
    buttonIcon.alt = "add to playlist button";
    cardButton.append(buttonIcon);
  });
};

// FILTER

genreFilter.addEventListener("change", () => {
  const selectedFilter = genreFilter.value;

  if (selectedFilter === "All") {
    renderSongs(songs);
  } else {
    const filtered = songs.filter(
      (song) => song.genre === selectedFilter,
    );
    renderSongs(filtered);
  }
});
renderSongs(songs);

// const addButton = document.querySelector(".card__button")
// const myPlaylist = document.querySelector(".playlist")

// const renderPlaylist = () => {
//   for (let i = 0; i < songs.length; i++) {
//     const li = document.createElement("li");
//     li.classList.add("playlist__item");
//     li.textContent = `${}`
//   }
// };


// addButton.addEventListener("click", () => {
//   for (let i = 0; i < songs.length; i++) {
//     if (!playList.includes(songs[i].title)) {
//       playList.push(songs[i])
//     }
//   }
// })





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
