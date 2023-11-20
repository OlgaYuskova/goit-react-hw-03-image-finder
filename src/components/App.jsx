import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery'
import fetchImages from '../API'
import { Loaders } from './Loader/Loader'
import {Button} from './Button/Button.js'

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    showModal: false,
    selectedImage: '',
    hasMoreImages: true,
    isLoading: false,
  };

  handleFormSubmit = (query) => {
    this.setState({ query, images: [], page: 1, hasMoreImages: true, isLoading: true });
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevState.query !== this.state.query) {
    this.loadData();
    }
  }

  loadData = async () => {
    const { query, page } = this.state;
    try {
      const newImages = await fetchImages( query, page );
      this.setState((prevState) => ({
        images: [...prevState.images, ...newImages],
        page: prevState.page + 1,
        hasMoreImages: newImages.length > 0,
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    }

    this.setState({isLoading: false })
  };

  render() {
    const { images, hasMoreImages, isLoading } = this.state;

    return (
      <div className='Container'>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          query={this.state.query}
          images={images}
          onLoadMore={this.loadData}
          showButton={hasMoreImages}
        />

        {isLoading === true && 
        <Loaders/>
        }
        {images.length !== 0 && (
        <Button onClick={this.loadData}/>
        )}
      </div>
    );
  }
}