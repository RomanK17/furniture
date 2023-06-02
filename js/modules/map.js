const createMap = () => {
    const map = document.querySelector('#yamap');
    const center = [53.211781, 34.303434];

    ymaps.ready(function() {
        const myMap = new ymaps.Map(map, {
            center: center,
            zoom:16
        });

        const placemark = new ymaps.Placemark(center,{
            balloonContentHeader: 'Мак Мебель',
            balloonContentBody: 'ул. Шоссейная, д.32',
            balloonContentFooter: '+7 910 333 38 30\n' +
                '+7 910 330 99 29'
        }, {
            iconLayout: "default#image",
        iconImageHref: '/free-icon-factory-7775060.png',
        iconImageSize: [20,20],
            iconImageOffset: [-20,0]
        });
        myMap.geoObjects.add(placemark);

        const location = ymaps.geolocation.get();//promise

        location.then(function(result) {
const locationText = result.geoObjects.get(0).properties.get('text');
console.log(locationText);
        });
    });
}

export default createMap;
