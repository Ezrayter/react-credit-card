import React, { useState } from 'react';

import { getCleanCardNumber, getSeparatedCardNumber } from './utils';

const CardForm = () => {
  const [cardNumber, setCardNumber] = useState('');

  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const cleanValue = getCleanCardNumber(value);

    if (!/^[0-9 ]*$/.test(cleanValue) || cleanValue.length > 16) {
      return;
    }

    setCardNumber(getSeparatedCardNumber(cleanValue));
  };

  return (
    <form className="card-form">
      <label htmlFor="card-number" className="card-form__label">
        Card Number
      </label>
      <input
        type="text"
        value={cardNumber}
        onChange={handleCardNumber}
        id="card-number"
        className="card-form__input"
      />
    </form>
  );
};

export default CardForm;
