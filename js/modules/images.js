import { Cloudinary } from "@cloudinary/url-gen";

const addSwitchingImages = () => {
    const imagesContainer = document.querySelector('.gallery__imagesContainer');
    const modalBigImg = document.createElement('div');
    const bigImg = document.createElement('img');
    const allBigImgs = document.querySelectorAll('.bigImg');

    //create modal
    modalBigImg.classList.add('popup');
    imagesContainer.appendChild(modalBigImg);
    modalBigImg.style.justifyContent = 'center';
    modalBigImg.style.alignItems = 'center';

    // create image
    modalBigImg.appendChild(bigImg);
    bigImg.classList.add('showImg');

    //for arrow
    let counter = 0;
    const getImagePath = (counter) => {
        const pathBigImg = allBigImgs[counter].getAttribute('href');
        bigImg.setAttribute('src', pathBigImg);
    }
    //enable cloudinary
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dwoclhnph'
        }
    });
    const myImage = cld.image('docs/models-12');

    const showModalBigImg = () => {
        modalBigImg.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    const hideModalBigImg = () => {
        modalBigImg.style.display = 'none';
        document.body.style.overflow = '';
    }

    imagesContainer.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;

        if (target.closest('.image_exp')) {
            const pathBigImg = myImage.toURL();
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
                if (counter < 0) counter = allBigImgs.length - 1;
                getImagePath(counter);
                break;
            case 'ArrowRight':
                counter++;
                if (counter >= allBigImgs.length) counter = 0;
                getImagePath(counter);
                break;
        }
    });

}
export default addSwitchingImages;