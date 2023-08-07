import propTypes from 'prop-types';
import {  Item, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({id, isOnline, avatar, name}) => {
    return (
        <Item key={id}>
            <Status isOnline={isOnline}>{isOnline}</Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name >{name}</Name>
        </Item>
    );
}

FriendListItem.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.string.isRequired,

};