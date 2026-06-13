import { type Pokemon } from "../types/Pokemon";

type Props = {
    pokemon: Pokemon;
    liberarPokemon: (id: number) => void;
};

function PokemonCard({ pokemon, liberarPokemon }: Props) {
    return (
        <article className="group relative bg-slate-800/40 backdrop-blur-md border border-slate-600/50 rounded-2xl p-4 flex flex-col items-center hover:bg-slate-700/50 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300 overflow-hidden">

            <span className="absolute -top-4 -right-2 text-6xl font-black text-white/5 z-0 italic">
                #{pokemon.id}
            </span>

            <div className="relative w-32 h-32 mb-4 z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-fuchsia-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <img
                    src={pokemon.imagen}
                    alt={pokemon.nombre}
                    className="relative w-full h-full object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            <h3 className="text-xl font-bold text-white capitalize mb-3 z-10 tracking-wide">
                {pokemon.nombre}
            </h3>

            <div className="flex gap-2 mb-4 z-10">
                {pokemon.tipos.map((tipo) => (
                    <span
                        key={tipo}
                        className="bg-slate-900/80 border border-slate-500 text-xs px-3 py-1 rounded-full uppercase tracking-widest font-semibold text-cyan-300"
                    >
                        {tipo}
                    </span>
                ))}
            </div>

            <div className="w-full grid grid-cols-2 gap-2 mb-4 text-center z-10 bg-black/20 rounded-xl p-2">
                <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest">HP</p>
                    <p className="font-bold text-green-400">{pokemon.hp}</p>
                </div>
                <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest">ATK</p>
                    <p className="font-bold text-red-400">{pokemon.ataque}</p>
                </div>
            </div>

            <button
                onClick={() => liberarPokemon(pokemon.id)}
                className="w-full bg-slate-700/50 hover:bg-red-500/80 text-white text-sm font-semibold py-2 rounded-xl transition-colors z-10"
            >
                Liberar
            </button>
        </article>
    );
}

export default PokemonCard;