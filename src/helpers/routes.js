export const homeRoute = '/';
export const detailRoute = (pokemon_id = ':pokemon_id') => `${homeRoute}pokemon/${pokemon_id}`;
