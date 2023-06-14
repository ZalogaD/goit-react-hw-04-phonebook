import styled from 'styled-components';

export const Form = styled.form`
  width: 350px;
  padding: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

//export const Title = styled.p`
//font-family: 'Montserrat', sans-serif;
//font-size: 20px;
//font-weight: bold;
//color: #37474F;
//margin-bottom: 20px;
//`;

export const Input = styled.input`
  font-size: 20px;
  background-color: #fff8dc;
  padding: 10px;
  margin-bottom: 8px;
  border: none;
  border-radius: 7px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    background-color: #00ffff;
    border-color: #e0ffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const Btn = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: #fff;
  background-color: #006400;
  border: none;
  border-radius: 5px;
  padding: 18px 30px;
  margin-top: 30px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover,
  &:focus {
    background-color: #1565c0;
    border-color: #0d47a1;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
