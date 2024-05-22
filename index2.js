// Select all elements with the class "arrow" and store them in the "arrows" variable
const arrows = document.querySelectorAll(".arrow");

// Select all elements with the class "movie-list" and store them in the "movieLists" variable
const movieLists = document.querySelectorAll(".movie-list");

// Iterate over each arrow element and its index
arrows.forEach((arrow, i) => {
  // Get the number of "img" elements within the corresponding movie list
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  
  // Initialize a click counter for each arrow
  let clickCounter = 0;

  // Add a click event listener to the current arrow
  arrow.addEventListener("click", () => {
    // Calculate the number of items that can fit within the window width, assuming each item is 270px wide
    const ratio = Math.floor(window.innerWidth / 270);
    
    // Increment the click counter
    clickCounter++;
    
    // Check if there are enough items left to scroll
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      // Move the corresponding movie list to the left by 300px
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      // If not enough items are left, reset the movie list position and the click counter
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  // Log the number of items that can fit within the window width to the console
  console.log(Math.floor(window.innerWidth / 270));
});
