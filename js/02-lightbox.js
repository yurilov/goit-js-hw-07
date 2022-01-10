import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

function createGallery(items) {
  for (const item of items) {
    const markup = `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>`;

    galleryRef.insertAdjacentHTML('beforeend', markup);
  }
}

createGallery(galleryItems);