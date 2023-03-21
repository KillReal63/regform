import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  height: 25px;
  width: 195px;
  background: #fff;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  margin: 10px;
  padding: 5px;
  box-shadow: 0 1px 6px #20212447;
`;


const Birthdate = () => {
  return <Input type='date' />;
};

export default Birthdate;
