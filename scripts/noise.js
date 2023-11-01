const canvas = document.getElementById('noiseCanvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
let imageData = ctx.createImageData(width, height);
let data = imageData.data;

function generateNoise() {
    for (let i = 0; i < data.length; i += 3) {
        const gray = Math.random() * 255;
        data[i] = gray;     // red
        data[i + 1] = gray; // green
        data[i + 2] = gray; // blue
        data[i + 3] = 255;  // alpha
    }
}

function animateNoise() {
    generateNoise();
    ctx.putImageData(imageData, 0, 0);
    requestAnimationFrame(animateNoise);
}

animateNoise();




