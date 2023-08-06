import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  flex-direction: column;
  width: 350px;
  padding: 0;
  margin-left:auto;
  margin-right:auto;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px #c6cccced;
  padding: 20px;
   width: 350px;
   margin-bottom: 10px;
`;

// const changeStatus = props => {
//   switch (props.isOnline) {
//      case 'true':
//        return 'green';
//      case 'false':
//        return 'red';
//      default:
//        return 'black';
//   }
// }

export const Status = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${props => (props.isOnline === 'true' ? 'green' : 'red')}
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