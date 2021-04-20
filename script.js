function rain() {
    let image = document.getElementById('background');
    image.onload = function () {
        var rainyDay = new RainyDay({
            image: this,
            blur: 10,
            fps: 50
            // sound: 'rain.mp3'
        });
        rainyDay.rain([
            [6, 3, 1]
        ], 50);
    };
    image.src = 'background.jpg';
}

rain();
