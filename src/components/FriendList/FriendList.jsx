import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends = [] }) => {
  return (
    <>
      <ul className={css.friendList}>
        {friends.map(({ id, ...props }) => (
          <FriendListItem key={id} {...props} />
        ))}
      </ul>
    </>
  );
};

FriendList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
