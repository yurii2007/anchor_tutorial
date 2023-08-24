import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image }) => {
  const { webformatURL, tags,largeImageURL } = image;
  return (
    <li id={largeImageURL}>
      <img src={webformatURL} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};