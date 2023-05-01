const addSwitchingImages = () => {
    const imagesContainer = document.querySelector('.gallery__сontainer');
    const modalBigImg = document.createElement('div');
    const bigImg = document.createElement('img');
    const allImages = document.querySelectorAll('.gallery__swiper-image');
    const pagination = document.body.querySelector('.swiper-pagination');

    //create modal
    modalBigImg.classList.add('popup');
    document.querySelector('.gallery__description').appendChild(modalBigImg);
    modalBigImg.style.justifyContent = 'center';
    modalBigImg.style.alignItems = 'center';

    // create image
    modalBigImg.appendChild(bigImg);
    bigImg.classList.add('showImg');

    //for arrow
    let counter = 0;
    const getImagePath = (counter) => {
        const pathBigImg = allImages[counter].getAttribute('src');
        bigImg.setAttribute('src', pathBigImg);
    };

    //enable cloudinary
    // const cld = new Cloudinary({
    //     cloud: {
    //         cloudName: 'dwoclhnph'
    //     }
    // });
    // const myImage = cld.image('docs/models-12');

    const showModalBigImg = () => {
        modalBigImg.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        pagination.style.display = 'none';
    }

    const hideModalBigImg = () => {
        modalBigImg.style.display = 'none';
        document.body.style.overflow = '';
        pagination.style.display = '';
    }

    imagesContainer.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;

        if (target.classList.contains('image_exp')) {
            const pathBigImg = target.getAttribute('src');
            bigImg.setAttribute('src', pathBigImg);
            showModalBigImg();
        }
    });

    modalBigImg.addEventListener('click', hideModalBigImg);

    document.addEventListener('keydown', (event) => {
        switch (event.code) {
            case 'Escape':
                hideModalBigImg();
                break;
            case 'ArrowLeft':
                counter--;
                if (counter < 0) counter = allImages.length - 1;
                getImagePath(counter);
                break;
            case 'ArrowRight':
                counter++;
                if (counter >= allImages.length) counter = 0;
                getImagePath(counter);
                break;
        }
    });
}

export default addSwitchingImages;