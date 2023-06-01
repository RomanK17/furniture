const createMap = () => {
    const map = document.querySelector('#yamap');
    const center = [53.211781, 34.303434];

    ymaps.ready(function() {
        let myMap = new ymaps.Map(map, {
            center: center,
            zoom:16
        });

        let placemark = new ymaps.Placemark(center,{}, {iconLayout: "default#image",
        iconImageHref: '/free-icon-factory-7775060.png',
        iconImageSize: [20,20],
            iconImageOffset: [-20,0]
        });
        myMap.geoObjects.add(placemark);
    });
}

export default createMap;
