const map = document.querySelector('#yamap');

ymaps.ready(function () {
    let myMap = new ymaps.Map(map, {
        center: [53.211781, 34.303434],
        zoom: 10
    });
});

export default ymaps;
