---
toc: true
comments: false
layout: post
title: Game Development with JavaScript's Phaser
description: Using JavaScript to Create Games using Phaser, by Paaras Purohit
type: tangibles
courses: { csa: {week: 0} }
permalink: /game-dev-w-phaser-javascript
---

### Before Moving On...

WGET this notebook. Answer these questions and all other questions/activites that follow.

### Warm Up

- What is your favourite video game?

- What are some things you know about game development?

- How do you think JavaScript relates to game development?

- How can you connect game development to what you already know to computer science?

- What is a game engine? Why do we use them?

### Phaser

As discussed above, it is best to use a game engine when developing games. We will use Phaser for our game development.

- Phaser.js is an open-source game development framework for creating web-based games.

- It is written in JavaScript and utilizes the HTML5 Canvas and WebGL technologies.

- Phaser.js provides a range of features and tools to facilitate game development, including sprite management, animation support, physics simulation, and input handling.

- It supports multiple platforms, including desktop and mobile devices, and is compatible with major web browsers.

- The framework offers a comprehensive set of APIs and plugins that enable developers to create interactive and engaging games.

- Phaser.js follows a component-based architecture, making it flexible and modular for creating complex game systems.

- It provides a robust set of tools for handling audio, user interfaces, and game logic.

- Phaser.js has an active and supportive community, with extensive documentation, tutorials, and examples available.

- It is suitable for both beginners and experienced developers, allowing them to rapidly prototype and build games.

- Phaser.js has gained popularity among indie game developers and is widely used for developing 2D games for the web.

# Getting Started with Phaser

Since we, on our systems, use NodeJS, we will install Phaser for NodeJS. To do that, go into your Leuck Reunion project directory and run the following commands:


```shell
(base) user_name@device_name:~/vscode/project$ npm init -y
(base) user_name@device_name:~/vscode/project$ npm install phaser
```

First, we initialize our packages and prepare them for necessary installations. Then, from the packages, we install Phaser.

### Create Your First Phaser Game

Now that Phaser is installed, you'll want to create the frontend where the game will run. To do that, we'll create the following HTML:


```html
<html>
    <head>
        <script src="//cdn.jsdelivr.net/npm/phaser@3.51.0/dist/phaser.js"></script>
    </head>
    <body>
        <script src="assets/js/script.js"></script>
    </body>
</html>
```

Now that the HTML is created, we can move on the JavaScript code. We want to create a configuration for our game that will tell the site how to run things and where. To do that, we'll create the following variable:


```javascript
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};
```

Answer these questions:

- What type of variable is ```config```?

- What do the letiables ```width``` and ```height``` do?

- What type of letiable is ```scene```?

- In your own words, what does ```config``` do?

When you run this code, you'll run into an error. The console will let you know that you haven't defined the functions ```preload()``` or ```create()``` even though you called them. These functions, along with some extra lines of code, will be what runs the game, and we need to make those. To do that, we'll create the following JS:


```javascript
let game = new Phaser.Game(config);

function preload ()
{
    
}

function create ()
{
    
}
```

We are so close to finishing our first game! However, when you run the code, you'll notice that the scene is to the left of the screen, but we want to put it in the center. To do that, let's update our HTML:


```javascript
<html>
  <head>
      <script src="//cdn.jsdelivr.net/npm/phaser@3.51.0/dist/phaser.js"></script>
      <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>
      <script src="assets/js/script.js"></script>
      <canvas></canvas>
  </body>
</html>
```

Let's also update our CSS with the following lines:


```html
<!--Ignore the style tags, just put the rest in your CSS file-->
<style>
canvas {
    display: block;
    margin: 0 auto;
}
</style>
```

And finally, check our JS to make sure we are set:


```javascript
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 570, // I found that this game height fits better on desktop view
    scene: {
      preload: preload,
      create: create
    }
  };  

var game = new Phaser.Game(config);

function preload() {

}

function create() {
  // Extra code I made to set the background colour to something else
  this.cameras.main.setBackgroundColor('#1c4c87');
}
```

Give yourself a pat on the back! Although it isn't much, you've just created your first game in JavaScript. From here, the possibilites of games are only limited to your imagination.

# Movement

Now that we've created the basis for our game to run, we can start implementing the key mechanics of every game into ours. The first is movement. However, to display movement, we need to create something in the scene to move. To that, we can create shapes in the scene. There are 3 main shapes we can create: Rectangles, circles, and ellipses. 

### Basic Shapes

To create a rectangle, put the following JS in to your ```create()``` method:


```javascript
var graphics = this.add.graphics(); // Grabbing the graphics code from Phaser to use
graphics.fillStyle(0xFF0000); // Set the colour to red
graphics.fillRect(x, y, width, height); // Replace with your own variables to see what works best for you
```

Variables are something we've learned about that we can implement in our game. Let's define the variables ```x, y, width, height``` at the beginning of our JS:


```javascript
let x = 375
let y = 260
let width = 50;
let height = 50;
```

At this point, you should have a rectangle (square) in the middle of your screen. Let's move on to the other shapes. To create a circle, replace the rectangle code with the following JS in your ```create()``` method:


```javascript
var graphics = this.add.graphics(); // Phaser graphics library
graphics.fillStyle(0x00FF00); // Fill colour of green
graphics.fillCircle(x, y, radius); // Drawing circle at x, y, radius
```

You'll also want to update your variables so that there is a defined radius, and you'll also want to center the x and y:


```javascript
let x = 400;
let y = 285;
let width = 50;
let height = 50;
let radius = 50;
```

After running the code altogether, you'll be able to see a green circle in the center. Finally, we need to create an ellipse. However, creating an ellipse is similar to a rectangle. Use the following JS:


```javascript
var graphics = this.add.graphics(); // PGL
graphics.fillStyle(0x0000FF); // Fill colour of blue
graphics.fillEllipse(x, y, width, height); // Drawing the ellipse

// I made the width equal to 100 to illustrate the difference between a circle and an ellipse, I suggest you do too.
```

You now know how to create shapes in Phaser. Now, let's get into the actual movement.

First, we need to update our variables. We need to create an object for our player, as well as define booleans to check whether or not we are moving. To do that, let's update our variables at the top:


```javascript
let x = 400;
let y = 285;
let width = 100;
let height = 50;
let radius = 50;
let rectangle;
let speed = 5;
var movement = {
    up: false,
    down: false,
    left: false,
    right: false
};
```

Now in our config, we only have methods to preload and create our scene. This means that nothing will happen during runtime. We want the game to continuously detect input and move the player accordingly. To do that, we can edit the ```config``` object to include an update method:


```javascript
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 570,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
```

Next, since we want out movement to be continuous and smooth instead of snappy and harsh, we want to detect when the key is up and when the key is down as opposed to only when the key is pressed. To do that, let's add the following JS to our ```create()``` method:


```javascript
this.input.keyboard.on('keydown', function (event) {
    var key = event.key;
    updateMovement(key, true);
});

this.input.keyboard.on('keyup', function (event) {
    var key = event.key;
    updateMovement(key, false);
});
```

As mentioned above, we need our ```update()``` method in order to keep the game's input and output running in real time. To do that, let's first create our update method:


```javascript
function update() {
    
}
```

Then, in the ```update()``` method, let's make conditional statements checking if our ```movement``` object's directions are true:


```javascript
if (movement.up) {

}
if (movement.down) {
    
}
if (movement.left) {
    
}
if (movement.right) {
    
}
```

In each conditional, we want to move the player by the speed. To do that, let's add lines that increase or decrease the positions by the speed:


```javascript
if (movement.up) {
    y -= speed;
}
if (movement.down) {
    y += speed;
}
if (movement.left) {
    x -= speed;
}
if (movement.right) {
    x += speed;
}
```

Great job! Now, you may have noticed we haven't actually created the rectangle yet. This is because doing so is a bit different. For now, create a rectangle in the ```create()``` method using what you know. 

Now when you run the code, you'll find that your player is a pen, and its drawing in a rectangle pattern all over the scene. This can be useful in some ways, but for most use cases, including this one, we don't want that. Instead, we want to keep only the player with the current position on the screen. To do that, we can clear the scene every frame. Let's add that to our code, right above our rectangle creation:


```javascript
rectangle.clear(); // This is the line of code that was just talked about
rectangle.fillStyle(0xFF0000); // Fill colour is red.
rectangle.fillRect(x, y, width, height); // Draw the player
```

With everything combined, give yourself another pat on the back. Not only do you have a Phaser environment and scene working, you also have a player on screen that can move on input!

# Physics & Collision

Right now, we have a player that moves with input. Not much going on. But, two key mechanics in game development we can add here are physics and collision.

### Collision

One of the first things you might notice when running the game is that the player is able to move outside of the scene. We want to restrict the movement of our player according to the borders. To do that, let's first check that our conditional statements in the ```update()``` movement are correct.


```javascript
if (movement.up) {
    y -= speed;
}
if (movement.down) {
    y += speed;
}
if (movement.left) {
    x -= speed;
}
if (movement.right) {
    x += speed;
}
```

Now that we know our input and movement code works, we need to add conditions inside each statements that will restrict the ```x``` position between 0 and the width of the scene, including the dimensions of the player. To do that, let's update the ```movement.left``` and ```movement.right``` conditionals as shown:


```javascript
if (movement.up) {
    y -= speed;
}
if (movement.down) {
    y += speed;
}
if (movement.left && x > 0) {
    x -= speed;
}
if (movement.right && x < config.width - width) {
    x += speed;
}
```

If you run the code now, you'll see that the right and left borders are not able to be passed, but the upper and lower borders are. We want to make all borders of the scene impassable. To do that, let's apply the same logic to the ```movement.up``` and ```movement.down``` conditionals as well:


```javascript
if (movement.up && y > 0) {
    y -= speed;
}
if (movement.down && y < config.height - height) {
    y += speed;
}
if (movement.left && x > 0) {
    x -= speed;
}
if (movement.right && x < config.width - width) {
    x += speed;
}
```

Now you have working collision in Phaser! This can be used for so many things in whatever game you choose to make.

### Physics

Phaser comes with excellent physics capabilities. One of the best physics phenomena to simulate in a game is gravity. Let's do that.

To implement physics in our game, we first need to make some changes in our code. We need to change our rectangle code so that it is more object-oriented. To do that, update all code where you draw the player so that it makes the player an object instead of the graphics:


```javascript
gfx = this.add.graphics();
gfx.fillStyle(0xFF0000);
rectangle = gfx.fillRect(x, y, width, height);
```

Also, make sure to define the variables at the beginning of your code if you haven't already. Now that we've prepped our newly object-oriented code, we can import Phaser's physics library. To do that, let's update our HTML to include Phaser's physics library:


```javascript
<html>
  <head>
      <script src="//cdn.jsdelivr.net/npm/phaser@3.51.0/dist/phaser.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/phaser@3.51.0/dist/phaser-arcade-physics.min.js"></script>
      <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>
      <script src="assets/js/script.js"></script>
      <canvas></canvas>
  </body>
</html>
```

We also need to update `config` so that it includes the physics properties from the library. To do that, update `config` as shown:


```javascript
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 570,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
```

We also need to add physics properties to the player that will enable gravity and world collision. To do that, add the following lines of code in your `create()` method:


```javascript
rectangle = this.add.rectangle(x, y, width, height, 0xFF0000);
this.physics.add.existing(rectangle);
rectangle.body.collideWorldBounds = true;
```

Now when you run your code, you'll see that gravity is working in a way that makes the game feel like somewhat of a platformer. However, the jumping is very wonky. We want to make it so that jumping is not available to the player when in the air. To do that, make sure your `update()` method looks like this:


```javascript
if (movement.left && rectangle.x > 0) {
    rectangle.x -= speed;
}
if (movement.right && rectangle.x < config.width - width) {
    rectangle.x += speed;
}
```

Now that we have clean slate for the jumping mechanic, we need add an upward force to our y-position whenever the W key is pressed. To do that, add the following conditional statement to your `update()` method:


```javascript
if (movement.up) {
    rectangle.body.setVelocityY(-100);
}
```

If you run your code now, you'll see that you now have jumping in your game. Although, there are two problems with jumping. The first is that it is slow. To fix this, we can simply increase both the velocity number as well as the gravity. Using what you know, make a variable for the jumping velocity (Hint: I called it jumpForce, but you can call it whatever you like).

The second problem we face is that the player cannot jump even when they are not touching the ground. Unless you're making something like Flappy Bird, you may not want this. We can fix this by checking if the player is touching the ground. To do that, let's update the jumping conditional:


```javascript
if (movement.up && rectangle.y > config.height - height) {
    rectangle.body.setVelocityY(jumpForce);
}
```

Remember, if you have a Flappy Bird mechanic in your own game, you do not need to make the following change. It is completely fine if you're jumping works as previously seen, but it is your choice.

### Elaborating on the `setVelocity()` Method

An alternative to this method is to use Phaser's `setVelocity()` method. This will set a certain axis's velocity to a speed you want. However, this will require changes to your code. Since this method simulates real-life forces (to the best of its ability), we need to first add a new variable to our variables that will multiply the speed by a constant number to make the player move at a reasonable speed. To do that, let's add this variable declaration to our variables:


```javascript
var speedVelocity = 75;
```

Next, we want to actually implement the `setVelocity()` method to our movement code, but we want to do so only on the X axis. To do that, update your movement code as such:


```javascript
if (movement.left && rectangle.x > 0) {
    rectangle.body.setVelocityX(-speed*speedVelocity);
}
if (movement.right && rectangle.x < config.width - width) {
    rectangle.body.setVelocityX(speed*speedVelocity);
}
if (movement.up && rectangle.y > config.height - height) {
    rectangle.body.setVelocityY(jumpForce);
}
```

When you run this code, you'll notice that the player will continuously move in a direction even after no keys are pressed down. We want the velocity to only move the player when a key is pressed. Therefore, we want to set the velocity to zero whenever no keys are pressed down, or when the movement's booleans are all false. To do that, let's add the following else conditionals to our movement code:


```javascript
if (movement.left && rectangle.x > 0) {
    // rectangle.x -= speed; // Move rectangle left by reducing x coordinate
    rectangle.body.setVelocityX(-speed*speedVelocity);
}
else if (movement.right && rectangle.x < config.width - width) {
    // rectangle.x += speed; // Move rectangle right by increasing x coordinate
    rectangle.body.setVelocityX(speed*speedVelocity);
} else {
    rectangle.body.setVelocityX(0);
}
if (movement.up && rectangle.y > config.height - height) {
    rectangle.body.setVelocityY(jumpForce);
}
```

From this, we learn that there are always multiple ways to accomplish the same things. This is a key value in a good code-code-coder. 

# Bonus Features

You've learned a lot about Phaser in this lesson. However, considering how much Phaser is capable of, it's just the tip of the iceberg. In the Hack Helper, you'll find a link to Phaser documentation. In there, you'll learn about two things in particular mentioned in the hacks. Happy hacking!

# Hacks

- Simulate movement in Phaser using the arrow keys instead of WASD.
- Movement: Make a pros and cons list of using the `pos += speed` syntax and the `setVelocity()` method.
- Physics is a key mechanic in game development. Using what you know about Phaser physics, simulate a real-life phenomenon related to physics (gravity is already taken) in your game (ex. projectile motion).
- Collision is an essential game mechanic in a almost every game out there. Using what you've learned about collision in Phaser, simulate collision detection between two shapes where they cannot occupy the same space.
- From the Phaser documentation, import a Phaser image of your choice and implement a particle system in your game. If you want to use Phaser's example code for this hack, you may do so, but you must explain how it works.
- Extra: Recreate a game in Phaser. It can be anywhere as simple as Adventure to something as complex as Among Us.

# Hack Helper

1. Here is the [official Phaser documentation](https://photonstorm.github.io/phaser3-docs/#toc9__anchors).
2. Here is the code that I used in my simple game that implements all that I taught in the lesson:
