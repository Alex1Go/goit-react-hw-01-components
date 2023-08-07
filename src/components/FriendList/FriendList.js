import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import {List } from './FriendList.styled';


export const FriendList = ({ friends }) => {
    return (
        <List >
             {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} id={id} />
            ))}
        </List>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
      })).isRequired,  
}