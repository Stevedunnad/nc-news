import React from 'react';

const Error = ({msg, status}) => {
  return (
    <div>
      <p>
        Sorry, that page does not exist. 
        Status is {status} and the resonse is{' '}
      {msg}
      </p>
    </div>
  );
};

export default Error;