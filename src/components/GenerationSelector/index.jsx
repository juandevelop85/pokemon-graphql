import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import { Select, SelectItem } from '@heroui/react';
import { GET_GENERATIONS } from '../../graphql/queries/getGenerations';

GenerationSelector.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

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
