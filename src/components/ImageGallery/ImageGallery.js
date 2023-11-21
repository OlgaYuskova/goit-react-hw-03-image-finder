import React from 'react';
import { ImageGalleryList } from './ImageGallery.slyled.js';
import {ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({images}) => (
  <ImageGalleryList>
    {images.map((image) => (
      <ImageGalleryItem key={image.id} image={image} />
    ))}
  </ImageGalleryList>
);

