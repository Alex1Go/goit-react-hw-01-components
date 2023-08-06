import styled from 'styled-components';

export const Card = styled.div`
  text-align: center;
  padding-top: 25px;
  width: 370px;
  box-shadow: 0 0 10px #c6cccced;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 40px
`;

export const Data = styled.div`

  align-items: center;
`;

export const Foto = styled.img`
  width: 250px;
  border-radius: 50%;
  background-color: #e7eeeeed;
  padding: 20px 10px 0px 10px;
  margin-bottom: 15px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 10px;
  color: #524a4d;
  `;

export const Tag = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #524a4d;
  margin-bottom: 10px;
  `;

export const Adres = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #524a4d;
  margin-bottom: 20px;
  `;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  padding: 0;
  width: inherit;
  background-color: #7e6f7449;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 0 0 10px #c6cccced;
  `;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export const Label = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: #524a4d8b;
  `;

export const Quantity = styled.span`
  font-weight: 800;
  font-size: 20px;
  color: #524a4d;
  `;