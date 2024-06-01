import 'simplelightbox/dist/simple-lightbox.min.css';

import SimpleLightbox from 'simplelightbox';

import './js/1-gallery';
import './css/gallery.css'

let gallery = new SimpleLightbox('.gallery a', { captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',


});