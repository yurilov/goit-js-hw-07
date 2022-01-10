import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

function createGallery(items) {
  const galleryList = document.createElement('ul');
  galleryList.classList.add('gallery__list');
  

  for (const item of items) {
    const markup = `<li class = "gallery__item"><a class = "gallery__link"><img src = "${item.preview}" class = "gallery__image" data-source = "${item.original}" alt="${item.description}"></a></li>`;

    galleryList.insertAdjacentHTML('beforeend', markup);
  }

  galleryRef.append(galleryList);
}

createGallery(galleryItems);
