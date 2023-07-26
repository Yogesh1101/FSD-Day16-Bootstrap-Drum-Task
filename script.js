var bassDrumMusic = document.getElementById('bassDrumAudio');
var cymbalMusic = document.getElementById('cymbalAudio');
var floorTumMusic = document.getElementById('floorTumAudio');
var snareDrumMusic = document.getElementById('snareDrumAudio');

function playFunc(type){
    if(type == 'bassDrum'){
        bassDrumMusic.play();
        var result = document.getElementsByClassName('result')[0];
        result.innerHTML = `You have Pressed the Bass Drum`;
    }
    if(type == 'cymbal'){
        cymbalMusic.play();
        var result = document.getElementsByClassName('result')[0];
        result.innerHTML = `You have Pressed the Cymbal`;
    }
    if(type == 'floorTum'){
        floorTumMusic.play();
        var result = document.getElementsByClassName('result')[0];
        result.innerHTML = `You have Pressed the Floor Tum`;
    }
    if(type == 'snareDrum'){
        snareDrumMusic.play();
        var result = document.getElementsByClassName('result')[0];
        result.innerHTML = `You have Pressed the Snare Drum`;
    }
}
document.addEventListener('keydown', function(event) {
    const key = event.key;

    switch(key){
        case 'a':
            bassDrumMusic.play();
            var result = document.getElementsByClassName('result')[0];
            result.innerHTML = `You have Pressed the Bass Drum`;
            break;
        case 's':
            cymbalMusic.play();
            var result = document.getElementsByClassName('result')[0];
            result.innerHTML = `You have Pressed the Cymbal`;
            break;
        case 'd':
            floorTumMusic.play();
            var result = document.getElementsByClassName('result')[0];
            result.innerHTML = `You have Pressed the Floor Tum`;
            break;
        case 'f':
            snareDrumMusic.play();
            var result = document.getElementsByClassName('result')[0];
            result.innerHTML = `You have Pressed the Snare Drum`;
            break;
        default:
            alert('Invalid Key - Press only a, s, d, f');
            break;
    }
})