import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px #c6cccced;
  padding: 20px;
   width: 350px;
   margin-bottom: 10px;
`;

export const Status = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${props => (props.isOnline  ? 'green' : 'red')}
`;


export const Avatar = styled.img`
  width: 70px;
  margin-right: 10px;
`;
export const Name = styled.p`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 15px;
  color: #524a4d;
`;