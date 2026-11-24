# Doodle Jump: Star Climb

A Doodle Jump game made with p5.js. You play a little star that wants to reach space, and you bounce your way up through the clouds without falling back down.

**Play the game:** https://vilidimitrova.github.io/doodle-jump/

## Team

- Vili (vilidimitrova)
- Mya (BeatNutz207)

## Theme

Sky and space. The star starts in the blue daytime sky and climbs through clouds. The higher it gets, the darker the background becomes, until it reaches space full of stars.

## How to play

- **Left / Right arrow keys** (or **A / D**): move the star sideways
- The star jumps automatically when it lands on a cloud
- Land on clouds to keep climbing
- If you fall off the bottom of the screen, the game is over
- Press **[Enter]** to start or restart

## Game screens

1. **Start screen:** title, instructions and a prompt to start
2. **Game screen:** the star, clouds, background and score
3. **End screen:** final score and an option to play again

## Platform types (clouds)

| Type | Behavior
| Normal cloud | Stays still. The star bounces every time.
| Moving cloud | Drifts left and right, and turns around at the edges.
| Breaking cloud | Falls apart when the star lands on it and disappears.

## Code structure

| File. | Contents
| `index.html` | Loads p5.js and our scripts
| `sketch.js` | Main loop and game states (`start`, `playing`, `gameover`)
| `player.js` | `Player` class: movement, gravity, jumping, screen wrap
| `platform.js`. | `Platform` base class and the subclasses `NormalPlatform`, `MovingPlatform`, `BreakingPlatform`
| `background.js` | `Background` class: sky color and the stars array

**OOP:**
