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

const RadioButton = styled.input`
  margin: 10px;
`;

const Form = () => {
  return (
    <>
      <Input type='text' />
      <Input type='text' />
      <div>
        <RadioButton type='radio' />
        <RadioButton type='radio' />
      </div>
      <Input type='number' />
      <Input type='email' />
      <Input type='date' />
      <select>
        <option>Страна</option>
        <option>Россия</option>
        <option>Беларусь</option>
        <option>Казахстан</option>
      </select>
      <Input type='text' />
      <button>Продолжить</button>
    </>
  );
};

export default Form;
