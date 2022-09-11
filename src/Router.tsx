import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { ExampleForm } from './pages/ExampleForm';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='' element={<ExampleForm />} />
      </Route>
    </Routes>
  );
}
