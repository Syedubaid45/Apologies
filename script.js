// No button will move around to avoid clicking
document.getElementById('no').addEventListener('mouseover', function() {
    const button = document.getElementById('no');
    const randomX = Math.floor(Math.random() * (window.innerWidth - button.clientWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - button.clientHeight));

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
});

// Yes button will show a loving picture and message when clicked
document.getElementById('yes').addEventListener('click', function() {
    // Hide the apology section
    document.getElementById('apology-section').style.display = 'none';

    // Show the response section with picture and message
    document.getElementById('response-section').style.display = 'block';
});
