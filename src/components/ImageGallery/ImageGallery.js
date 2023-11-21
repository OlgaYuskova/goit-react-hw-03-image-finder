import React from 'react';
import {ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
import { ImageGalleryList } from './ImageGallery.slyled.js';


export const ImageGallery = ({images, onClickImageItem}) => (
  <ImageGalleryList>
    {images.map((image) => (
      <ImageGalleryItem key={image.id} image={image} onClickImageItem={onClickImageItem} />
    ))}
  </ImageGalleryList>
);

