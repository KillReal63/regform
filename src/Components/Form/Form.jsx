import React from 'react';
import Address from '../Address/Address';
import Birthdate from '../Birthdate/Birthdate';
import Country from '../Country/Country';
import Email from '../Email/Email';
import Gender from '../Gender/Gender';
import Name from '../Name/Name.jsx';
import PhoneNumber from '../PhoneNumber/PhoneNumber';

const Form = () => {
  return (
    <>
      <Name />
      <Gender />
      <PhoneNumber />
      <Email />
      <Birthdate />
      <Country />
      <Address />
      <button>Продолжить</button>
    </>
  );
};

export default Form;
