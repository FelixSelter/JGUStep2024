class Player {
  constructor(position) {
    this.position = position;
  }
}

class Projectile {
  constructor(x, y, targetX, targetY) {
    this.x = x;
    this.y = y;
    const length = Math.sqrt(
      Math.pow(targetX - x, 2) + Math.pow(targetY - y, 2)
    );
    this.stepX = (targetX - x) / length;
    this.stepY = (targetY - y) / length;
  }
}

let centerText = "";
const width = 1920 / 2;
const height = 1080 / 2;
const worldWidth = 10 + 1;
const player1 = new Player(-5);
const player2 = new Player(5);
const projectiles = [];
const projectileSpeed = 0.005;

function enemyMove() {
  if (accuracy(0) >= 1 - accuracy(-1)) {
    const isHit = Math.random() - accuracy(0) < 0;
    centerText = isHit ? "You lost" : "You won";
    document.getElementById("move").onclick = undefined;
    document.getElementById("shoot").onclick = undefined;

    projectiles.push(
      new Projectile(
        player2.position - 0.5,
        0.5,
        player1.position,
        isHit ? Math.random() : [1.1, -0.1][Math.round(Math.random())]
      )
    );
  } else {
    player2.position -= 1;
  }
}

document.getElementById("move").onclick = () => {
  player1.position += 1;
  enemyMove();
};

document.getElementById("shoot").onclick = () => {
  const isHit = Math.random() - accuracy(0) < 0;
  centerText = isHit ? "You won" : "You lost";

  projectiles.push(
    new Projectile(
      player1.position + 0.5,
      0.5,
      player2.position,
      isHit ? Math.random() : [1.1, -0.1][Math.round(Math.random())]
    )
  );
};

const unitInPixel = (1 / worldWidth) * width;

function accuracy(offset) {
  const distance = player2.position - player1.position - 1;
  return 1 - (distance + offset) / (worldWidth - 2);
}

function x(x) {
  return (x + worldWidth / 2) * unitInPixel;
}

function y(y) {
  return height - y;
}

function h(h) {
  return -h;
}

function setup() {
  createCanvas(width, height);
}
function draw() {
  background(220);
  fill(0, 0, 0);
  textSize(0.5 * unitInPixel);
  text(`P(d): ≈${round(accuracy(0) * 100 * 100) / 100}%`, 0, 0.5 * unitInPixel);
  text(
    `P(d-1): ≈${Math.min(round(accuracy(-1) * 100 * 100) / 100, 100)}%`,
    0,
    unitInPixel
  );

  for (const player of [player1, player2]) {
    rect(
      x(player.position) - unitInPixel / 2,
      y(0),
      unitInPixel,
      h(unitInPixel)
    );
  }

  for (let i = 0; i < projectiles.length; i++) {
    const projectile = projectiles[i];
    if (projectile.x > worldWidth / 2) {
      projectiles.splice(i, 1);
      i -= 1;
      continue;
    }

    text(centerText, width / 2 - textWidth(centerText) / 2, height / 2);

    fill(255, 0, 0);
    rect(
      x(projectile.x) - 0.1 * unitInPixel,
      y(projectile.y * unitInPixel + 0.025 * unitInPixel),
      0.2 * unitInPixel,
      0.05 * unitInPixel
    );

    projectile.x += projectileSpeed * deltaTime * projectile.stepX;
    projectile.y += projectileSpeed * deltaTime * projectile.stepY;
  }
}
