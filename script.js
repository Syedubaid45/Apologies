// Move the "No" button to a random position when hovered
document.getElementById('no').addEventListener('mouseover', function() {
    const button = document.getElementById('no');
    const container = document.querySelector('.container');

    // Get random X and Y positions within the container
    const randomX = Math.floor(Math.random() * (container.offsetWidth - button.offsetWidth));
    const randomY = Math.floor(Math.random() * (container.offsetHeight - button.offsetHeight));

    // Set the new position for the "No" button
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
});

// Redirect to thank you page on clicking "Yes"
document.getElementById('yes').addEventListener('click', function() {
    // Redirect to the thank you page
    window.location.href = 'thankyou.html';
});
