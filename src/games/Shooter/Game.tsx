import Sketch from "react-p5";
//@ts-expect-error desc
import p5Types from "p5";
import { useEffect } from "react";

class Player {
  position: number;
  constructor(position: number) {
    this.position = position;
  }
}

class Projectile {
  x: number;
  y: number;
  stepX: number;
  stepY: number;
  constructor(x: number, y: number, targetX: number, targetY: number) {
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
const aspectRatio = 16 / 9;
const worldWidth = 10 + 1;
const player1 = new Player(-5);
const player2 = new Player(5);
const projectiles: Array<Projectile> = [];
const projectileSpeed = 0.005;

function initGame() {
  centerText = "";
  player1.position = -5;
  player2.position = 5;

  document.getElementById("move")!.onclick = () => {
    player1.position += 1;
    enemyMove();
  };

  document.getElementById("shoot")!.onclick = () => {
    const isHit = Math.random() - accuracy(0) < 0;
    centerText = isHit ? "Gewonnen" : "Verloren";
    document.getElementById("move")!.onclick = () => {};
    document.getElementById("shoot")!.onclick = () => {};

    document.getElementById(
      "stats"
    )!.innerHTML = `Mit dieser Strategie hätten Sie ${
      Math.round(accuracy(0) * 100 * 100) / 100
    }% der Spiele gewonnen`;

    projectiles.push(
      new Projectile(
        player1.position + 0.5,
        0.5,
        player2.position,
        isHit ? Math.random() : [1.1, -0.1][Math.round(Math.random())]
      )
    );
  };
}

function enemyMove() {
  if (accuracy(0) >= 1 - accuracy(-1)) {
    const isHit = Math.random() - accuracy(0) < 0;
    centerText = isHit ? "Verloren" : "Gewonnen";
    document.getElementById("move")!.onclick = () => {};
    document.getElementById("shoot")!.onclick = () => {};

    document.getElementById(
      "stats"
    )!.innerHTML = `Mit dieser Strategie hätten Sie ${
      Math.round((1 - accuracy(0)) * 100 * 100) / 100
    }% der Spiele gewonnen`;

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

function unitInPixel(p5: p5Types) {
  return (1 / worldWidth) * p5.width;
}

function accuracy(offset: number) {
  const distance = player2.position - player1.position - 1;
  return 1 - (distance * 1.1 + offset) / (worldWidth * 1.1 - 2);
}

function x(x: number, p5: p5Types) {
  return (x + worldWidth / 2) * unitInPixel(p5);
}

function y(y: number, p5: p5Types) {
  return p5.height - y;
}

function h(h: number) {
  return -h;
}

function setup(p5: p5Types, canvasParentRef: Element) {
  window.p5 = p5;
  p5.createCanvas(p5.windowWidth, p5.windowWidth / aspectRatio).parent(
    canvasParentRef
  );
  initGame();
}

function draw(p5: p5Types) {
  p5.background(220);
  p5.fill(0, 0, 0);
  p5.textSize(0.5 * unitInPixel(p5));
  p5.text(
    `P(d): ≈${Math.round(accuracy(0) * 100 * 100) / 100}%`,
    0,
    0.5 * unitInPixel(p5)
  );
  p5.text(
    `P(d-1): ≈${Math.min(Math.round(accuracy(-1) * 100 * 100) / 100, 100)}%`,
    0,
    unitInPixel(p5)
  );

  for (const player of [player1, player2]) {
    p5.rect(
      x(player.position, p5) - unitInPixel(p5) / 2,
      y(0, p5),
      unitInPixel(p5),
      h(unitInPixel(p5))
    );
  }

  for (let i = 0; i < projectiles.length; i++) {
    const projectile = projectiles[i];
    if (projectile.x > worldWidth / 2) {
      projectiles.splice(i, 1);
      i -= 1;
      continue;
    }

    p5.text(
      centerText,
      p5.width / 2 - p5.textWidth(centerText) / 2,
      p5.height / 2
    );

    p5.fill(255, 0, 0);
    p5.rect(
      x(projectile.x, p5) - 0.1 * unitInPixel(p5),
      y(projectile.y * unitInPixel(p5) + 0.025 * unitInPixel(p5), p5),
      0.2 * unitInPixel(p5),
      0.05 * unitInPixel(p5)
    );

    projectile.y += projectileSpeed * p5.deltaTime * projectile.stepY;
    projectile.x += projectileSpeed * p5.deltaTime * projectile.stepX;
  }
}

function windowResized() {
  //@ts-expect-error desc
  window.p5.resizeCanvas(
    //@ts-expect-error desc
    window.p5.windowWidth,
    //@ts-expect-error desc
    window.p5.windowWidth / aspectRatio
  );
}

function clear() {
  const parent = document.getElementById("canvasParent")!.firstElementChild!;
  if (parent.childElementCount !== 0) {
    for (let i = 0; i < parent.childElementCount - 1; i++) {
      parent.removeChild(parent.children[i]);
    }
  } else {
    setTimeout(clear, 100);
  }
}

export default function Game() {
  useEffect(() => {
    document.getElementById("reset")!.onclick = initGame;
    clear();

    addEventListener("resize", windowResized);

    return () => {
      removeEventListener("resize", windowResized);
    };
  }, []);

  return <Sketch setup={setup} draw={draw} />;
}
