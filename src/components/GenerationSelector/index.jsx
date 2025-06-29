import { useQuery } from '@apollo/client';
import { GET_GENERATIONS } from '../../graphql/queries/getGenerations';
import { Select, SelectItem } from '@heroui/react';

export default function GenerationSelector({ value, onChange }) {
  const { data, loading, error } = useQuery(GET_GENERATIONS);

  if (loading) return <p>Cargando generaciones...</p>;
  if (error) return <p>Error al cargar generaciones: {error.message}</p>;

  return (
    <Select label='Seleccionar generación' selectedKeys={value ? [value] : []} onChange={onChange}>
      {data.generations.map((gen) => (
        <SelectItem key={gen.name}>{gen?.name?.replace('generation-', 'Generación ').toUpperCase()}</SelectItem>
      ))}
    </Select>
  );
}
