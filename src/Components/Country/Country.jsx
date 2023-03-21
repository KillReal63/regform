import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  height: 25px;
  width: 195px;
  background: #fff;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  margin: 10px;
 
  box-shadow: 0 1px 6px #20212447;
`;

const Country = () => {
  return (
    <>
      <Select>
        <option disabled={true}>Выберите страну</option>
        <option>Россия</option>
        <option>Беларусь</option>
        <option>Казахстан</option>
      </Select>
    </>
  );
};

export default Country;
