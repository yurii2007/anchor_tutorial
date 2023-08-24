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
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    isModalShow: false,
    modalImg: null,
  };

  totalHits = null;

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ isLoading: true });
      try {
        const { totalHits, hits } = await getImages(query, page);
        this.totalHits = totalHits;
        if (page === 1) {
          this.setState({ query, images: [...hits], isLoading: false });
          return;
        }
        this.setState({
          query,
          totalHits,
          images: [...this.state.images, ...hits],
          isLoading: false,
        });
      } catch (error) {
        this.setState({ isLoading: false });
        return alert('Oops, something went wrong');
      }
    }
  }

  handleSearch = query => {
    this.setState({ query, page: 1 });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleModalOpen = modalImg => {
    this.setState({ isModalShow: true, modalImg });
  };

  handleModalClose = () => {
    this.setState({ isModalShow: false });
  };

  render() {
    const { images, page, isLoading, isModalShow, modalImg } = this.state;
    const limitPage = this.totalHits > 0 && page < Math.ceil(this.totalHits / 12);
    return (
      <DivElem>
        <SearchBar onSubmit={this.handleSearch} />
        {isLoading && <Loader />}
        {this.totalHits === 0 && <p>Sorry, we didn't found pictures for this query</p>}
        <ImageGallery images={images} modalOpen={this.handleModalOpen} />
        {limitPage && <Button onLoadMore={this.loadMore} />}
        {isModalShow && (
          <Modal onModalClose={this.handleModalClose} image={modalImg} />
        )}
      </DivElem>
    );
  }
}
