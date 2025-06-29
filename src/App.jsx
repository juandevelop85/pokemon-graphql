import { BrowserRouter } from 'react-router';
import { HeroUIProvider } from '@heroui/react';
import Router from './router';

export default function App() {
  return (
    <HeroUIProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </HeroUIProvider>
  );
}
