import React from 'react';
import './userInputText.css';

const UserInputText = ({ handleChange, ...otherProps }) => {
   return (
      <div className='group'>
         <input className='form-input' onChange={handleChange} {...otherProps} />
      </div>
   );
};

export default UserInputText;
