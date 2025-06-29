import { Image } from '@heroui/react';
import { capitalize } from '../../helpers/common-functions';
import { typeColorMap } from '../../helpers/colorTypes';
import DrawerDetail from '../DrawerDetail';
import { useNavigate } from 'react-router';

export default function PokemonCard({ pokemon }) {
  const navigation = useNavigate();
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // {isOpen && <DrawerDetail isOpen={isOpen} onOpenChange={onOpenChange} pokemon={pokemon} />}
  const types = pokemon?.pokemons?.[0]?.pokemontypes || [];
  const imagen =
    pokemon?.pokemons?.[0]?.pokemonsprites?.[0]?.sprites ||
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  return (
    <div
      onClick={() => navigation(`/detail/${pokemon.id}/`)}
      className='bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg hover:bg-gray-100'
    >
      <div className='justify-center flex'>
        <Image isBlurred alt={pokemon.name} className='w-20 h-20' src={imagen} />
      </div>

      <h3 className='text-lg font-bold mb-2'>{capitalize(pokemon.name)}</h3>

      <div className='flex justify-center gap-2 flex-wrap'>
        {types.map((t) => {
          const typeNameSlug = t.type.name;
          const typeName = t?.type?.typenames?.[0]?.name;
          const typeClass = typeColorMap[typeNameSlug] || 'bg-gray-300 text-black';

          return (
            <span key={typeNameSlug} className={`px-3 py-1 text-xs rounded-full ${typeClass}`}>
              {capitalize(typeName)}
            </span>
          );
        })}
      </div>
    </div>
  );
}
