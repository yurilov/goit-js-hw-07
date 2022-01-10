import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

function createGallery(items) {
  for (const item of items) {
    const markup = `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`;

    galleryRef.insertAdjacentHTML('beforeend', markup);
  }
}

createGallery(galleryItems);
