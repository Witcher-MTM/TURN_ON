var screen = document.getElementById("screen");
var fireball = document.getElementById("fireball1");
var bulb = document.getElementById("idBulb");

var position = fireball.getBoundingClientRect();

var timer;
var collisiontimer;

var isFlying = false;
var direction = "none";

window.onload = () => {
  screen.onclick = (e) => {
    if (isFlying == false) {
      isFlying = true;
      if (position.left > e.pageX) {
        direction = "left";
      } else {
        direction = "right";
      }

      timer = setInterval(function () {
        Move(e.pageX - screen.offsetLeft, e.pageY, direction);
      }, 10);
      collisiontimer = setInterval(Collision, 10);
    }
  };
};
function Move(posX, posY, direction) {
  let screenPosition = screen.getBoundingClientRect();
  position = fireball.getBoundingClientRect();

  const rect = screen.getBoundingClientRect();
  let centerX = rect.width / 2;
  let centerY = rect.height / 2;

  let curX = posX - centerX;
  let curY = posY - centerY;

  console.log(curY);

  if (direction == "left") {
    fireball.style = `transform: translate(${curX}px,-${
      rect.top + rect.height
    }px);`;
  } else {
    fireball.style = `transform: translate(${curX}px,-${
      rect.top + rect.height
    }px);`;
  }

  if (
    position.top <= screenPosition.top ||
    position.left <= screenPosition.left ||
    position.left >= screenPosition.left + screen.offsetWidth
  ) {
    fireball.remove();
    console.log("stop");
    clearInterval(timer);
  }
  //fireball.style.top = fireball.offsetTop + curY + "px";
}

function Collision() {
  position = fireball.getBoundingClientRect();
  let positionBulb = bulb.getBoundingClientRect();
  if (
    position.left >= positionBulb.left &&
    position.left <= positionBulb.left + bulb.offsetWidth &&
    position.top >= positionBulb.top &&
    position.top <= positionBulb.top + bulb.offsetHeight
  ) {
    idBulb.src = "./img/bulbOn.png";
    console.log("Cool");
    clearInterval(collisiontimer);
  }
}
