// 1. Добавь библиотеку SimpleLightbox как зависимость проекта 
// используя npm (ссылка на CDN из твоей прошлой работы больше не нужна).
// 2. Используй свой JavaScript код из предыдущей домашней работы, но выполни 
// рефакторинг с учетом того, что библиотека была установлена через npm (синтаксис import/export).

// Для того чтобы подключить CSS код библиотеки в проект, необходимо 
// добавить еще один импорт, кроме того который описан в документации.


import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const renderCard = crateGalleryCard(galleryItems);

gallery.insertAdjacentHTML('beforeend',renderCard);



function crateGalleryCard(galleryItems) {

    return galleryItems.map(({preview,original,description}) => {
        return `
            <a class="gallery__item" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                    title="${description}"
                />
            </a>
        `
    }).join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionType: "alt",
});
