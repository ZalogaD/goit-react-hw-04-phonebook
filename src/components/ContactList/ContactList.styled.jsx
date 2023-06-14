import styled from 'styled-components';

export const List = styled.ul`
  padding: 0 20px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  font-weight: bold;
  width: 350px;
  padding: 12px;
  background-color: #FFDAB9;
  margin-bottom: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
`;

export const DeleteButton = styled.button`
color: #E0FFFF;
background-color: #D2691E;
border: none;
border-radius: 5px;
padding: 5px 10px;
font-size: 14px;
cursor: pointer;
`;