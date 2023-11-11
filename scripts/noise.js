// Get the canvas and its context
const canvas = document.getElementById('noiseCanvas');
const ctx = canvas.getContext('2d');

// Define the parameters
let gridHeight = 4; // Change as needed, in pixels
let gridWidth = 4; // Change as needed, in pixels
let markHeight = 2; // Change as needed, in pixels
let markWidth = 1; // Change as needed, in pixels
let markColor = [0, 0, 0, 255]; // RGBA color of the mark
let markOpacity = 1; // Opacity of the mark
let offset = 2; // Change as needed, in pixels


// Function to resize the canvas and regenerate the image data
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    imageData = ctx.createImageData(canvas.width, canvas.height);
    data = imageData.data;
}

// Call resizeCanvas when the window is resized
window.addEventListener('resize', resizeCanvas);

// Call resizeCanvas initially to set the canvas size
resizeCanvas();

function generateNoise() {
    for (let y = 0; y < canvas.height; y += gridHeight) {
        for (let x = 0; x < canvas.width; x += gridWidth) {
            // Apply offset to every other row
            let xOffset = (y / gridHeight) % 2 === 0 ? x : x + offset;
            
            // Generate a mark at each grid point
            for (let j = 0; j < markHeight; j++) {
                for (let i = 0; i < markWidth; i++) {
                    const index = ((y + j) * canvas.width + (xOffset + i)) * 4;
                    data[index] = markColor[0];     // red
                    data[index + 1] = markColor[1]; // green
                    data[index + 2] = markColor[2]; // blue
                    data[index + 3] = markColor[3] * markOpacity;  // alpha
                }
            }
        }
    }
}

function animateNoise() {
    generateNoise();
    ctx.putImageData(imageData, 0, 0);
    requestAnimationFrame(animateNoise);
}

animateNoise();


