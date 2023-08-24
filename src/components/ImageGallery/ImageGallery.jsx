import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { UlElem } from './ImageGallery.styled';

export const ImageGallery = ({ images, modalOpen}) => {

  const openModal = (evt) => {
    if(evt.target === evt.currentTarget) return;
    const liElem = evt.target.closest('li')
    const modalObject = {img: liElem.id, tags: liElem.children[0].alt}
    modalOpen(modalObject)
  }

  return (
    <UlElem onClick={(evt)=>{openModal(evt)}}>
      {images.map(el => <ImageGalleryItem key={el.id} image={el} largeImageURL={el.largeImageURL} />)}
    </UlElem>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  modalOpen: PropTypes.func.isRequired,
};