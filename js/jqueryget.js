$(document).ready(function () {
  $.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1", function (
    data
  ) {
    const suit = data.cards[0].suit;
    const value = data.cards[0].value;
    const image = data.cards[0].images.svg;
    console.log(suit);
    console.log(value);
    console.log(image);
    document.getElementById("suit").innerHTML = suit;
    document.getElementById("value").innerHTML = value;
    document.getElementById("image").src = image;
  });
});
function newCard() {
  location.reload();
}
