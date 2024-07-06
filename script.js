
        // Set the date and time we're counting down to (7th of July 2024 at 5:30 PM Perth time)
        var countDownDate = new Date("July 7, 2024 17:30:00 GMT+08:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {
            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="timer"
            document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "TOO LATE";
            }
        }, 1000);

let currentIndex = 0;

function showNextImage() {
    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.gallery img');
    currentIndex = (currentIndex + 1) % images.length;
    const translateX = -currentIndex * 155; // 150px width + 5px margin (2.5px each side)
    gallery.style.transform = `translateX(${translateX}px)`;
}

function showPreviousImage() {
    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.gallery img');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    const translateX = -currentIndex * 155;
    gallery.style.transform = `translateX(${translateX}px)`;
}

function startSlideshow() {
    setInterval(showNextImage, 2000); // Change image every 2 seconds
}

document.addEventListener('DOMContentLoaded', startSlideshow);

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        showNextImage();
    } else if (event.key === 'ArrowLeft') {
        showPreviousImage();
    }
});



document.addEventListener("click", function() {
    var audio = document.getElementById("myAudio");
    if (audio.paused) {
        audio.play();
    }
});
