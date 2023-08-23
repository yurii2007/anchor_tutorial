import PropTypes from 'prop-types';
import { Card, UserInfoWrapper, UlElem, LiElem } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Card>
      <UserInfoWrapper>
        <img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </UserInfoWrapper>

      <UlElem>
        <LiElem>
          <span>Followers</span>
          <span>{followers}</span>
        </LiElem>
        <LiElem>
          <span>Views</span>
          <span>{views}</span>
        </LiElem>
        <LiElem>
          <span>Likes</span>
          <span>{likes}</span>
        </LiElem>
      </UlElem>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
