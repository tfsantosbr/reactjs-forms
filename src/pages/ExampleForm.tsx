import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

const newDefaultFormValidationSchema = zod.object({
  name: zod.string().min(1, 'Name is required my friend!!!'),
  email: zod.string().min(1),
  password: zod.string().min(1),
  age: zod.number().min(1).max(100),
  birthdate: zod.date(),
});

export function ExampleForm() {
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(newDefaultFormValidationSchema),
  });

  function handleFormSubmit(data: any) {
    console.log(data);
  }

  console.log(formState.errors);

  const name = watch('name');
  const isSubmitButtonDisabled = !name;

  return (
    <>
      <h2>Default Form</h2>

      <form onSubmit={handleSubmit(handleFormSubmit)} action=''>
        <p>
          <label htmlFor='name'>Name: </label>
          <input id='name' type='text' {...register('name')} />
        </p>

        <p>
          <label htmlFor='name'>E-mai: </label>
          <input id='email' type='text' {...register('email')} />
        </p>

        <p>
          <label htmlFor='name'>Password: </label>
          <input id='password' type='password' {...register('password')} />
        </p>

        <p>
          <label htmlFor='name'>Age: </label>
          <input
            id='age'
            type='number'
            {...register('age', { valueAsNumber: true })}
          />
        </p>

        <p>
          <label htmlFor='name'>Birthdate: </label>
          <input
            id='birthdate'
            type='date'
            {...register('birthdate', { valueAsDate: true })}
          />
        </p>

        <br />

        <button type='submit' disabled={isSubmitButtonDisabled}>
          Enviar
        </button>
      </form>
    </>
  );
}
