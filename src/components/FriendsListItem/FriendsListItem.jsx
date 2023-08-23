import PropTypes from 'prop-types';
import { LiElem } from './FriendsListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <LiElem>
      <span className={isOnline ? 'online' : 'offline'}></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </LiElem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number,
};
