import React from 'react';
import{ModalWindow, OverlayModalWindow } from './Modal.styled'

export const Modal = ({ selectedImg}) => (
  <OverlayModalWindow >
    <ModalWindow>
      <img src={selectedImg} alt="Large"/>
    </ModalWindow>
  </OverlayModalWindow>
);