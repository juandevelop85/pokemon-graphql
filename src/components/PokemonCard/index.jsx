import { Image, useDisclosure } from '@heroui/react';
import { capitalize } from '../../helpers/common-functions';
import { typeColorMap } from '../../helpers/colorTypes';
import DrawerDetail from '../DrawerDetail';

export default function PokemonCard({ pokemon }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const types = pokemon?.pokemons?.[0]?.pokemontypes || [];

  return (
    <div onClick={onOpen} className='bg-white rounded-lg shadow-md pt-20 pb-6 px-4 text-center cursor-pointer hover:shadow-lg hover:bg-gray-100'>
      <div className='justify-center flex'>
        <Image
          isBlurred
          alt={pokemon.name}
          className='w-20 h-20'
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        />
      </div>

      <h3 className='text-lg font-bold mb-2'>{capitalize(pokemon.name)}</h3>

      <div className='flex justify-center gap-2 flex-wrap'>
        {types.map((t) => {
          const typeName = t.type.name;
          const typeClass = typeColorMap[typeName] || 'bg-gray-300 text-black';

          return (
            <span key={typeName} className={`px-3 py-1 text-xs rounded-full ${typeClass}`}>
              {capitalize(typeName)}
            </span>
          );
        })}
      </div>
      <DrawerDetail isOpen={isOpen} onOpenChange={onOpenChange} pokemon={pokemon} />
    </div>
  );
}
