import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    setError('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.length < 6 || !email.match(/^\S+@\S+\.\S+$/)) {
      setError('Por favor verifique su información nuevamente');
      setSuccessMessage('');
      return;
    }

    setSuccessMessage(`Gracias ${name}, te contactaremos cuanto antes vía mail`);
    setName('');
    setEmail('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder='Nombre'        
        />
      </div>
      <div>

        
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder='E-mail'
        
        />
      </div>
      <button type="submit" >Enviar</button>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
};

export default Form;
