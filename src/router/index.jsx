import { Route, Routes } from "react-router";
import PokeDex from "../pages/PokeDex";
import PokemonDetail from "../pages/PokemonDetail";

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<PokeDex />} />
      <Route exact path='/detail/:pokemon_id' element={<PokemonDetail />} />
    </Routes>
  );
};

export default Router;
