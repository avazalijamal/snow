const canvas = this.document.createElement('canvas')
const ctx = canvas.getContext('2d')
const flakes = [];

Resize()
Style()

function Style() {
    canvas.style.position = 'fixed'
    canvas.style.top = 0
    canvas.style.left = 0
    canvas.style.zIndex = 100
    canvas.style.backgroundColor = 'transparent'
}

function Resize() {
    canvas.width = this.window.innerWidth
    canvas.height = this.window.innerHeight
}

function createFlake() {
    return {
        x: Math.random() * canvas.width,
        y: 0,
        size: Math.random() * 5 + 2,
        speed: Math.random() * 3 + 1,
    };
}

function drawFlake(flake) {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
    ctx.fill();
}

function updateFlake(flake) {
    flake.y += flake.speed;

    if (flake.y > canvas.height) {
        flake.y = 0;
        flake.x = Math.random() * canvas.width;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log(flakes.length);

    flakes.forEach(flake => {
        drawFlake(flake);
        updateFlake(flake);
    });

    requestAnimationFrame(draw);
}

console.log('salam');
function Start() {
    console.log('salam');
    this.document.body.appendChild(canvas)

    for (let i = 0; i < 33; i++) {
        flakes.push(createFlake());
    }

    draw();
}

Start()
// window.addEventListener('load', Start)
window.addEventListener('resize', Resize)
