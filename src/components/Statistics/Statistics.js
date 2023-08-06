import propTypes from 'prop-types';
import {Card, List, Title, Item, Label, Percentage } from './Statistics.styled'; 
import { randomColor } from '../Randomcolor';


export const Statistics = ({ title, stats }) => {
  return (
    <Card >
  
 {title && <Title >{title}</Title>}
      <List >
        {stats.map(stat => (
          <Item key={stat.id} style={{ backgroundColor: randomColor() }}>
            <Label >{stat.label}</Label>
            <Percentage >{stat.percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Card>
  );
};

Statistics.propTypes = {
  title: propTypes.string.isRequired,
  stats: propTypes.number.isRequired,
};
