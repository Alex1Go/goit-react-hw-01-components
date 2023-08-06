import styled from 'styled-components';

export const Card = styled.table`
  box-shadow: 0 0 10px #c6cccced;
  width: 800px;
  border-spacing: 0;
  margin-left:auto;
  margin-right:auto;
  margin-bottom: 40px;
`;

export const List = styled.thead`
   background-color: #00bcd4;
    color: white;
    font-weight: 600;
    font-size: 15px;
`;

export const ListItem = styled.td`
padding: 10px;
`;

export const Item = styled.td`
  padding: 10px;
  width: inherit;
  font-weight: 700;
  font-size: 15px;
  color: #524a4d;
  justify-content: center;
`;
