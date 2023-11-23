import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import fetchImages from '../API';
import { Loaders } from './Loader/Loader';
import { Button } from './Button/Button.js';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    getMoreImg: true,
    isLoading: false,
    showModal: false,
    selectedImage: '',
  };

  componentDidUpdate(prevProp, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.getData();
    }
  }

  handleFormSubmit = query => {
    this.setState({
      query,
      images: [],
      page: 1,
      getMoreImg: true,
      isLoading: true,
    });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  handleClickOpenModal = selectedImage => {
    this.setState({ showModal: true, selectedImage });
  };

  handleClickNextPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  getData = async () => {
    const { query, page } = this.state;
    try {
      const newImages = await fetchImages(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
        getMoreImg: newImages.length > 0,
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    }

    this.setState({ isLoading: false });
  };

  render() {
    const { images, isLoading, selectedImage, showModal } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery
          query={this.state.query}
          images={images}
          onClickImageItem={this.handleClickOpenModal}
        />

        {isLoading === true && <Loaders />}

        {images.length !== 0 && <Button onClick={this.handleClickNextPage} />}

        {showModal && (
          <Modal image={selectedImage} onClose={this.handleCloseModal} />
        )}
      </>
    );
  }
}
