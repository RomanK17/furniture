const createMap = () => {
    const map = document.querySelector('#yamap');
    const center = [53.211781, 34.303434];

    ymaps.ready(function() {
        let myMap = new ymaps.Map(map, {
            center: center,
            zoom: 10
        });

        let placemark = new ymaps.Placemark(center);
        myMap.geoObjects.add(placemark);
    });
}

export default createMap;
