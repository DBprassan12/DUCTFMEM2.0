var canvas = document.getElementById('matrix');
var ctx = canvas.getContext('2d');

// Making the canvas full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Characters to be used in the animation
var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
matrix = matrix.split("");

// Setting up the columns
var font_size = 10;
var columns = canvas.width / font_size;
var drops = [];

// Setting up the drops
for (var x = 0; x < columns; x++)
    drops[x] = 1;

// Drawing the characters
function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "red"; // Green text
    ctx.font = font_size + "px arial";
    
    for (var i = 0; i < drops.length; i++) {
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        
        if (drops[i] * font_size > canvas.height && Math.random() > 0.975)
            drops[i] = 0;
        
        drops[i]++;
    }
}

setInterval(draw, 33);

// Resize canvas when window is resized
window.addEventListener('resize', function() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    columns = canvas.width / font_size;
    drops = [];
    for (var x = 0; x < columns; x++)
        drops[x] = 1;
});
