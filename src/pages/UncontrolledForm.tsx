import { FormEvent } from "react";

export function UncontrolledForm() {
  function handleSubmit(event:FormEvent) {
    event.preventDefault();

    const name = event.target.name.value;
    console.log(name);
  }
  return (
    <>
      <h1>Uncontrolled Form</h1>

      <form onSubmit={handleSubmit} action=''>
        <label htmlFor='name'>Name: </label>
        <input id='name' name='name' type='text' />

        <br />

        <button type='submit'>
          Enviar
        </button>
      </form>
    </>
  );
}
