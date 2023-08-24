import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image }) => {
  const { webformatURL, tags, id } = image;
  return (
    <li id={id}>
      <img src={webformatURL} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};