export default class Background {
  stars = [];
  progress = 0;

  constructor(starCount) {
    for (let i = 0; i < starCount; i++) {
      this.stars.push({ x: random(width), y: random(height) });
    }
  }

  display() {
    if (this.progress < 0.33) {
      background("skyblue");
    } else if (this.progress < 0.66) {
      background("royalblue");
    } else {
      background("midnightblue");
    }

    if (this.progress > 0.66) {
      fill("white");
      for (let i = 0; i < this.stars.length; i++) {
        circle(this.stars[i].x, this.stars[i].y, 3);
      }
    }
  }
}
