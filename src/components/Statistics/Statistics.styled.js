import styled from 'styled-components';

export const Card = styled.section`
width: 370px;
border-radius: 5px;
 margin: auto;
 align-items: center;
box-shadow: 0 0 10px #c6cccced;
 padding-top: 10px;
  
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 15px;
  color: #524a4d;
  text-align: center;
`;
export const List = styled.ul`
 display: flex;
 flex-direction: row;
 //justify-content: space-evenly;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 74px;
  align-items: center;
  color: white;
`;
export const Label = styled.span`
  font-weight: 700;
  font-size: 20px;
  // color: #524a4d8b;
  margin-bottom: 5px;
`;
export const Percentage = styled.span`
  font-weight: 800;
  font-size: 20px;
  //color: #524a4d;
`;

