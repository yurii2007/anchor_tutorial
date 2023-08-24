import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { UlElem } from './ImageGallery.styled';

export const ImageGallery = ({ images, modalOpen }) => {
  return (
    <UlElem onClick={modalOpen}>
      {images.map(el => <ImageGalleryItem key={el.id} image={el} id={el.id} />)}
    </UlElem>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  modalOpen: PropTypes.func.isRequired,
};