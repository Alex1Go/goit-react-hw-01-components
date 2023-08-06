import propTypes from "prop-types";
import { Card, Foto, Data, Name, Tag, Adres,List,Item,Quantity,Label } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card >
      <Data >
        <Foto src={avatar} alt="User avatar" />
        <Name >{username}</Name>
        <Tag >@{tag}</Tag>
        <Adres >{location}</Adres>
      </Data>
      <List>
        <Item>
          <Label >Followers</Label>
          <Quantity >{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label >Views</Label>
          <Quantity >{stats.views}</Quantity>
        </Item>
        <Item>
          <Label >Likes</Label>
          <Quantity >{stats.likes}</Quantity>
        </Item>
      </List>
    </Card>
  );
};

Profile.propTypes = {
   username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.object.isRequired,
};