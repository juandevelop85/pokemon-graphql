import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-100 to-white text-center px-4'>
      <img
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
        alt='Pikachu'
        className='w-32 h-32 mb-4 animate-bounce'
      />
      <h1 className='text-4xl font-bold text-red-600 mb-2'>404</h1>
      <p className='text-lg font-semibold text-gray-700 mb-4'>¡Oh no! algo no hemos encontrado…</p>
      <Link to='/' className='px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition'>
        Volver al inicio
      </Link>
    </div>
  );
}
