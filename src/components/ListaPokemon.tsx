import { type Pokemon } from "../types/Pokemon";
import PokemonCard from "./PokemonCard";

type Props = {
    pokemons: Pokemon[];
    liberarPokemon: (id: number) => void;
};

function ListaPokemon({ pokemons, liberarPokemon }: Props) {
    if (pokemons.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-48 text-center bg-slate-800/30 rounded-2xl border border-dashed border-slate-600">
                <span className="text-4xl mb-2">📟</span>
                <p className="text-slate-400 font-medium">Pokedex vacía.<br />¡Ve a la hierba alta a buscar!</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {pokemons.map((pokemon) => (
                <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    liberarPokemon={liberarPokemon}
                />
            ))}
        </div>
    );
}

export default ListaPokemon;