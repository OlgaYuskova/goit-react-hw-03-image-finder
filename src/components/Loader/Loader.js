import React from 'react';
import { Circles } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loaders = () => (
  <LoaderContainer>
    <Circles
      height="80"
      width="80"
      color="#4682B4"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </LoaderContainer>
);
