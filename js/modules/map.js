const createMap = () => {
    const map = document.querySelector('#yamap');
    const center = [53.211781, 34.303434];
    //create map
    ymaps.ready(function () {
        const myMap = new ymaps.Map(map, {
            center: center,
            zoom: 16,
            controls: ['routePanelControl']
        });
        //add placemark
        const placemark = new ymaps.Placemark(center, {
            balloonContentHeader: 'Мак Мебель',
            balloonContentBody: 'ул. Шоссейная, д.32',
            balloonContentFooter: '+7 910 333 38 30\n' +
                '+7 910 330 99 29'
        }, { // change default icon
            iconLayout: "default#image",
            iconImageHref: '/free-icon-factory-7775060.png',
            iconImageSize: [20, 20],
            iconImageOffset: [-20, 15]
        });
        myMap.geoObjects.add(placemark);
        //get location
        const location = ymaps.geolocation.get();//promise
        location.then(function (result) {
            const locationText = result.geoObjects.get(0).properties.get('text');
            //set route
            const routePanelControl = myMap.controls.get('routePanelControl');
            routePanelControl.routePanel.state.set({
                type: 'masstransit',
                from: locationText,
                toEnabled: false,//нельзя заполнять поле куда
                to: center
            });
        })
    });
}

export default createMap;
