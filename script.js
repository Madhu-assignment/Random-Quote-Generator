const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("next_quote");
button.addEventListener("click", all_quote);
function all_quote() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.content}"`;
      author.innerHTML = `by - ${data.author}`;
    });
}
