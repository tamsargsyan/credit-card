const CardInner = () => {
  return (
    <div className='cardFormInner'>
      <div className='cardInput'>
        <label htmlFor='v-card-number' className='cardInput-label'>
          Card Number
        </label>
        <input
          type='number'
          id='v-card-number'
          maxLength={19}
          data-card-field
          autoComplete='off'
          className='cardInput-input cardInput-cardNumber'
        />
        <button
          disabled={true}
          title='Show/Hide card number'
          className='cardInput-eye'></button>
      </div>
      <div className='cardInput'>
        <label htmlFor='v-card-name' className='cardInput-label'>
          Card Name
        </label>
        <input
          type='text'
          id='v-card-name'
          data-card-field
          autoComplete='off'
          className='cardInput-input'
        />
      </div>
      <div className='cardFormRow'>
        <div className='cardForm-col'>
          <div className='cardForm-group'>
            <label htmlFor='cardMonth' className='cardInput-label'>
              Expiration Date
            </label>
          </div>
        </div>
        <div className='cardForm-col -cvv'>
          <div className='cardInput'>
            <label htmlFor='v-card-cvv' className='cardInput-label'>
              CVV
            </label>
            <input
              type='number'
              id='v-card-cvv'
              maxLength={4}
              data-card-field
              autoComplete='off'
              className='cardInput-input'
            />
          </div>
        </div>
      </div>
      <button className='cardForm-btn'>Submit</button>
    </div>
  );
};

export default CardInner;
