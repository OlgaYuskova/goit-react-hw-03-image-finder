import React from 'react';
import { ButonLoadMore, ButonContainer } from './Button.styled';

export const Button = ({ onClick }) => (
  <ButonContainer>
    <ButonLoadMore onClick={onClick}>Load More</ButonLoadMore>
  </ButonContainer>
);
