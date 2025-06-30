// src/components/Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import pokeballIcon from '../../assets/pokeball-colored.svg'; // asegúrate de tener esta imagen
import { Image } from '@heroui/react';

export default function PrincipalLayout({ children }) {
  return (
    <div className='min-h-screen bg-gradient-to-b from-primary-100 to-secondary-100 flex flex-col'>
      <header className='bg-primary-500 text-white px-6 py-4 shadow-md flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Image isBlurred src={pokeballIcon} alt='Pokeball' className='w-8 h-8' />
          <h1 className='text-xl font-bold tracking-wide'>Pokédex GraphQL</h1>
        </div>
        <nav>
          <Link to='/' className='text-white hover:underline text-sm'>
            Inicio
          </Link>
        </nav>
      </header>

      <main className='flex-grow container mx-auto p-4 md:p-8'>
        <div className='bg-white rounded-lg shadow-md p-6'>{children}</div>
      </main>

      <footer className='bg-blue-900 text-white text-center py-3 text-xs'>© {new Date().getFullYear()} Pokédex - JuanDevelop - Datos vía PokeAPI GraphQL</footer>
    </div>
  );
}
