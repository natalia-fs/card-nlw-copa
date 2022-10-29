let isIgniteCard = false;
const shape = document.getElementById("shape");

var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti(Object.assign({}, defaults, opts, {
    particleCount: Math.floor(count * particleRatio)
  }));
}

function triggerFire(){
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

setTimeout(triggerFire, 1000);

function switchCard(event) {

  const card = event.currentTarget;
  const backgroundImage = isIgniteCard ? "ignite" : "explorer";
  isIgniteCard = !isIgniteCard;
  card.style.backgroundImage = `url(./assets/bg-${backgroundImage}.svg)`;
  shape.style.backgroundImage = `url(./assets/shape-${backgroundImage}.svg)`;
}