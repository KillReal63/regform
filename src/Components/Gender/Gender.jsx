import React from 'react';
import styled from 'styled-components';

const RadioButton = styled.input`
  margin: 10px;
`;

const Gender = () => {
  return (
    <div>
      <RadioButton type='radio' />
      <RadioButton type='radio' />
    </div>
  );
};

export default Gender;
