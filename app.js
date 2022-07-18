// Change the color gradient of 'Layla Krauss' when clicking on 'Developer'

function changeColor() {
  document.getElementById("name").classList.toggle("newColors");
}

const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("input");

searchBtn.addEventListener("click", () => {
  const inputValue = searchInput.value;
  alert(
    "You'd probably have better luck finding " +
      '"' +
      inputValue +
      '" using Google.'
  );
});
