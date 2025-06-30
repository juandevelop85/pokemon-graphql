import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image } from '@heroui/react';
import PropTypes from 'prop-types';
import pokeballIcon from '../../assets/pokeball-colored.svg'; // asegúrate de tener esta imagen

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

PrincipalLayout.propTypes = {
  children: PropTypes.node,
};

export default function PrincipalLayout({ children }) {
  return (
    <motion.div
      className='flex flex-col min-h-screen'
      variants={pageVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.5 }}
    >
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

        <footer className='bg-blue-900 text-white text-center py-3 text-xs'>
          © {new Date().getFullYear()} Pokédex - JuanDevelop - Datos vía PokeAPI GraphQL
        </footer>
      </div>
    </motion.div>
  );
}
