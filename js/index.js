// Select elements
const card = document.getElementById('card');
const yesBtn = document.getElementById('yes_btn');
const noBtn = document.getElementById('no_btn');
const message = document.querySelector('.message');

// Function to animate card's movement
function moveCard(direction) {
    // Define animation based on direction
    let animation;
    if (direction === 'right') {
        animation = gsap.to(card, { x: 100, duration: 0.2 });
    } else if (direction === 'left') {
        animation = gsap.to(card, { x: -100, duration: 0.2 });
    } else if (direction === 'up') {
        animation = gsap.to(card, { y: -100, duration: 0.2 });
    } else if (direction === 'down') {
        animation = gsap.to(card, { y: 100, duration: 0.2 });
    }

    // Pause animation on complete
    animation.eventCallback('onComplete', () => animation.pause());
}

// Function to update message
function updateMessage(text) {
    message.textContent = text;
}

// Event listeners for buttons
yesBtn.addEventListener('click', () => {
    // Move card back to original position
    gsap.to(card, { x: 0, y: 0, duration: 1 });
    // Update message
    updateMessage("😏");
});

noBtn.addEventListener('click', () => {
    // Move card in a different direction
    const directions = ['right', 'left', 'up', 'down'];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    moveCard(randomDirection);
});
