let isIgniteCard = false;
const shape = document.getElementById("shape");
function switchCard(event) {

  const card = event.currentTarget;
  const backgroundImage = isIgniteCard ? "ignite" : "explorer";
  isIgniteCard = !isIgniteCard;
  card.style.backgroundImage = `url(./assets/bg-${backgroundImage}.svg)`;
  shape.style.backgroundImage = `url(./assets/shape-${backgroundImage}.svg)`;
}