document.getElementById('no').addEventListener('mouseover', function() {
    const button = document.getElementById('no');
    const randomX = Math.floor(Math.random() * (window.innerWidth - button.clientWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - button.clientHeight));

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
});
