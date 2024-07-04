document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('imageContainer').style.display = 'block';
    document.getElementById('revealAudio').play();
    document.querySelector('.button-group').style.display = 'none';
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('noMessage').innerText = 'tingin kana lng sa salamin :>';
    document.querySelector('.button-group').style.display = 'none';
});
