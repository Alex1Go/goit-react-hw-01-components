import propTypes from 'prop-types';
import {List, FriendListItem, Status, Avatar, Name} from './FriendList.styled';


export const FriendList = ({ friends }) => {
    return (
        <List >
            {friends.map(friend => (
                <FriendListItem key={friend.id}>
                    <Status >{friend.isOnline}</Status>
                    <Avatar src={friend.avatar} alt="User avatar" width="48" />
                    <Name >{friend.name}</Name>
                </FriendListItem>
            ))}
        </List>
    );
};

FriendList.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.string.isRequired,

};