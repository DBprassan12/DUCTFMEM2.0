document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('redirectButton').addEventListener('click', () => {
        window.location.href = './ransom.html';
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiElements = [];

    class Confetti {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            this.size = Math.random() * 5 + 5;
            this.speed = Math.random() * 3 + 2;
            this.angle = Math.random() * 360;
        }

        update() {
            this.y += this.speed;
            this.angle += this.speed / 2;
            if (this.y > canvas.height) {
                this.y = -this.size;
                this.x = Math.random() * canvas.width;
                this.speed = Math.random() * 3 + 2;
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(0, 0, this.size, this.size);
            ctx.restore();
        }
    }

    function initConfetti() {
        for (let i = 0; i < 100; i++) {
            confettiElements.push(new Confetti());
        }
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettiElements.forEach(confetti => {
            confetti.update();
            confetti.draw();
        });
        requestAnimationFrame(animateConfetti);
    }

    initConfetti();
    animateConfetti();
});



document.addEventListener("click", function() {
    var audio = document.getElementById("myAudio");
    if (audio.paused) {
        audio.play();
    }
});




