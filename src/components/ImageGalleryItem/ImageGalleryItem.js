import React from 'react';
import {ImageGalleryItems} from './ImageGalleryItem.styled.js'

export const ImageGalleryItem = ({ image }) => (
        <ImageGalleryItems >
            <img src={image.webformatURL} alt={image.category} />
        </ImageGalleryItems>
    )
;
