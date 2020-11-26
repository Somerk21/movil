function DootDown() {
    document.getElementById('imgDoot').setAttribute('src', 'media/tambor.jpg');

    var audio = new Audio('media/audio.wav');
    audio.play();
}

function DootUp() {
    document.getElementById('imgDoot').setAttribute('src', 'media/PLATILLOS.jpg')
}