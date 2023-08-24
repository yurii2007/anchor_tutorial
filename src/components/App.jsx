import { Component } from 'react';
import { getImages } from './helpers/pixabay-api';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { DivElem } from './App.styled';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    page: 1,
    images: [],
    query: '',
    isLoading: false,
    btnShow: false,
    isModalShow: false,
    modalImage: null,
  };

  totalResults = null;

  componentDidUpdate(_, prevState) {
    const { page, images, query } = this.state;
    if (page !== prevState.page || query !== prevState.query) {
      this.setState({ isLoading: true });
      try {
        getImages(query, page).then(res => {
          this.setState({
            images: [...images, ...res.hits],
            isLoading: false,
          });
          this.totalResults = res.totalHits;
        });
      } catch (error) {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = query => {
    try {
      this.setState({ isLoading: true });
      getImages(query, 1).then(res => {
        this.setState({ page: 1, query: query });
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  handleModalOpen = evt => {
    const imageId = evt.target.closest('li').id;
    const modalImage = this.state.images.find(el => el.id === +imageId);
    this.setState({ isModalShow: true, modalImage });
  };

  handleModalClose = () => {
    this.setState({ isModalShow: false });
  };

  render() {
    const { images, isLoading, isModalShow, modalImage } = this.state;

    return (
      <DivElem>
        <SearchBar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        {images.length > 0 ? (
          <ImageGallery images={images} modalOpen={this.handleModalOpen} />
        ) : (
          false
        )}
        {this.state.page < Math.ceil(this.totalResults / 12) && (
          <Button onLoadMore={this.handleLoadMore} />
        )}
        {isModalShow && (
          <Modal
            image={modalImage}
            onModalClose={this.handleModalClose}
          ></Modal>
        )}
      </DivElem>
    );
  }
}
