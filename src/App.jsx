import { BrowserRouter, Route, Routes } from 'react-router';
import { HeroUIProvider } from '@heroui/react';
import Router from './router';

// https://graphql.pokeapi.co/v1beta2/console
export default function App() {
  return (
    <HeroUIProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </HeroUIProvider>
  );
}
