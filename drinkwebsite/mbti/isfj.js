document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 40; i++) {
        let petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 5 + 8 + 's';
        document.body.appendChild(petal);

        petal.addEventListener('mouseover', () => {
            petal.style.transform = 'scale(1.5) rotate(360deg)';
        });

        petal.addEventListener('mouseout', () => {
            petal.style.transform = 'rotate(30deg)';
        });
    }

    let audio = new Audio('https://www.bensound.com/bensound-music/bensound-lovely.mp3');
    audio.loop = true;
    audio.volume = 0.4;
    audio.play();
});

