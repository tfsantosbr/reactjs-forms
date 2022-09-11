import { useState } from 'react';

export function ControlledForm() {
  const [name, setName] = useState('');

  return (
    <>
      <h1>Controlled Form</h1>

      <form action=''>
        
        <label htmlFor='name'>Name: </label>
        <input
          id='name'
          type='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <br />

        <button type='submit' disabled={!name}>
          Enviar
        </button>

      </form>
    </>
  );
}
