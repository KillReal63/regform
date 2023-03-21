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
  const [firstName, setFirstName] = useInput('');
  // const [firstNameError, setFirstNameError] = useState(false)
  // const [firstNameDirty, setFirstNameDirty] = useState(false)
  console.log(firstName);
  return (
    <>
      <Input
        type='text'
        placeholder='Ваше имя'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input type='text' placeholder='Ваша фамилия' />
    </>
  );
};

export default Name;
