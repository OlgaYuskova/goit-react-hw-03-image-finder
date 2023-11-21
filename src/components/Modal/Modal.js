import { Component } from 'react';
import { ModalWindow, OverlayModalWindow } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseKeyDown);
  }

  handleCloseModalWindow = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  handleCloseKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { image, alt } = this.props;
    return (
      <OverlayModalWindow onClick={this.handleCloseModalWindow}>
        <ModalWindow>
          <img src={image} alt={alt} />
        </ModalWindow>
      </OverlayModalWindow>
    );
  }
}
