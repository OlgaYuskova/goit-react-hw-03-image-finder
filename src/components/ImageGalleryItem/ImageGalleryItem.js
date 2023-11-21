import React from 'react';
import { ImageGalleryItems } from './ImageGalleryItem.styled.js';

export const ImageGalleryItem = ({ image, onClickImageItem }) => (
  <ImageGalleryItems>
    <img
      src={image.webformatURL}
      alt={image.category}
      onClick={() => onClickImageItem(image.largeImageURL)}
    />
  </ImageGalleryItems>
);
