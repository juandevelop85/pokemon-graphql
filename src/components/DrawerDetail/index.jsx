import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Button, Image } from '@heroui/react';
import { capitalize } from '../../helpers/common-functions';
import PokemonDetailData from '../PokemonDetailData';

export default function DrawerDetail({ isOpen, onOpenChange, pokemon }) {
  return (
    <Drawer size='5xl' isOpen={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader className='flex flex-col gap-1'>{capitalize(pokemon.name)}</DrawerHeader>
            <DrawerBody>
              <PokemonDetailData pokemonId={pokemon?.id} />
            </DrawerBody>
            <DrawerFooter>
              <Button color='danger' variant='light' onPress={onClose}>
                Close
              </Button>
              <Button color='primary' onPress={onClose}>
                Action
              </Button>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
