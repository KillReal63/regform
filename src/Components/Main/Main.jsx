import React from 'react';
import Form from '../Form/Form.jsx';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 500px;
  border: 1px solid #33ccff;
  border-radius: 24px;
`;

const Main = () => {
  return (
    <Container>
      <Form />
    </Container>
  );
};

export default Main;
