import { Route, Routes } from 'react-router';
import { Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import PokeDex from '../pages/PokeDex';
import PokemonDetail from '../pages/PokemonDetail';
import PrincipalLayout from '../components/Layout/PrincipalLayout';
import NotFound from '../pages/NotFound';

const Router = () => {
  const routes = [
    {
      page: PokeDex,
      exact: true,
      path: '/',
      layout: PrincipalLayout,
    },
    {
      page: PokemonDetail,
      exact: true,
      path: '/detail/:pokemon_id',
      layout: PrincipalLayout,
    },
  ];

  return (
    <Suspense fallback={<div className='text-center p-8'>Cargando...</div>}>
      <AnimatePresence mode='popLayout'>
        <Routes>
          {routes.map(({ path, exact = true, page: Page, layout: Layout, ...res }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              {...res}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          ))}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default Router;
