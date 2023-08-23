import PropTypes from 'prop-types';
import { UlElem } from './FriendsList.styled';
import { FriendListItem } from '../FriendsListItem/FriendsListItem'; 

export const FriendsList = ({ friends }) => {
  return (
    <UlElem>
      {friends.map(el => (
        <FriendListItem {...el} key={el.id} />
      ))}
    </UlElem>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
