import propTypes from 'prop-types';
import {Card, List, Title, Item, Label, Percentage } from './Statistics.styled'; 
// function randomColor() {
// 	let color = '#' + Math.random().toString(16).slice(3, 9);
// }
function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Statistics = ({ title, stats }) => {
  return (
    <Card >
      <Title >{title}</Title>

      <List >
        {stats.map(stat => (
          <Item key={stat.id}>
            <Label >{stat.label}</Label>
            <Percentage >{stat.percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Card>
  );
};

Statistics.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};

randomColor();