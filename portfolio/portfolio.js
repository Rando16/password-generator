document.addEventListener("DOMContentLoaded", function () {
  let searchButton = document.querySelector(".search-button");
  const searchMenu = document.getElementById("searchMenu");

  searchButton.addEventListener("click", function () {
    if (searchMenu.style.display === "none" || searchMenu.style.display === "") {
      searchMenu.style.display = "block";
    } else {
      searchMenu.style.display = "none";
    }
  });
});
