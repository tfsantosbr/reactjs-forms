import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { ControlledForm } from './pages/ControlledForm';
import { UncontrolledForm } from './pages/UncontrolledForm';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='' element={<ControlledForm />} />
        <Route path='controlled-form' element={<ControlledForm />} />
        <Route path='uncontrolled-form' element={<UncontrolledForm />} />
      </Route>
    </Routes>
  );
}
