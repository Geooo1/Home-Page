const starfieldContainer = document.getElementById('starfield');
const earthContainer = document.getElementById('earth');
const moonContainer = document.getElementById('moon');

let speed = 1; // Adjust the speed as needed
let position = 100; // Start from the right

function updateStarfield() {
    position -= speed;
    if (position < 0) {
        position = 100;
    }
    starfieldContainer.style.backgroundPosition = `${position}% 0`;
    requestAnimationFrame(updateStarfield);
}

function updateEarth() {
    position -= speed;
    if (position < 0) {
        position = 100;
    }
    earthContainer.style.backgroundPosition = `${position}% 0`;
    requestAnimationFrame(updateEarth);
}

function updateMoon() {
    position -= speed;
    if (position < 0) {
        position = 100;
    }
    moonContainer.style.backgroundPosition = `${position}% 0`;
    requestAnimationFrame(updateMoon);
}

updateStarfield();
updateEarth();
updateMoon();

const navOptions = document.querySelectorAll('.nav-option');
const selectedOption = document.querySelector('.selected');

navOptions.forEach((option) => {
    option.addEventListener('mouseenter', () => {
        navOptions.forEach((navOption) => {
            navOption.classList.remove('selected');
        });
        option.classList.add('selected');
    });

    option.addEventListener('mouseleave', () => {
        option.classList.remove('selected');
        selectedOption.classList.add('selected');
    });
});