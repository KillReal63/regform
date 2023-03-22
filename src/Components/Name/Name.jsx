import React from 'react';
import styled from 'styled-components';
import useInput from '../../Hooks/useInput.jsx';

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

const Name = () => {
  const firstName = useInput('', { isEmpty: true, minLength: 3 });

  return (
    <>
      {firstName.isDirty && firstName.isEmpty && (
        <div style={{ color: 'red' }}>Пустое поле</div>
      )}
      {firstName.isDirty && firstName.minLengthError && (
        <div style={{ color: 'red' }}>Мало символов</div>
      )}
      <Input
        type='text'
        placeholder='Ваше имя'
        value={firstName.value}
        onChange={(e) => {
          firstName.onChange(e);
        }}
        onBlur={(e) => firstName.onBlur(e)}
      />
      <Input type='text' placeholder='Ваша фамилия' />
    </>
  );
};

export default Name;
