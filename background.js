// Draws the sky. The higher the star climbs, the darker the sky gets, until the player reaches space and the stars appear.
class Background {
  stars = []; // array
  progress = 0; // bg color value

  constructor(starCount) {
    // loop to create the stars at random positions
    for (let i = 0; i < starCount; i++) {
      this.stars.push({
        x: random(width),
        y: random(height),
        size: random(1, 3),
      });
    }
  }

  display() {
    // blend between light blue (sky) and dark blue (space) depending on progress
    const skyColor = color(135, 206, 235);
    const spaceColor = color(10, 10, 40);
    background(lerpColor(skyColor, spaceColor, this.progress));

    // stars fade in as progress goes up
    noStroke();
    fill(255, 255, 255, this.progress * 255);
    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];
      circle(star.x, star.y, star.size);
    }
  }
}
