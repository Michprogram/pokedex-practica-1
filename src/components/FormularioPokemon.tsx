import { useState } from "react";
import { type Pokemon } from "../types/Pokemon";

type Props = {
    agregarPokemon: (pokemon: Pokemon) => void;
};

function FormularioPokemon({ agregarPokemon }: Props) {
    const [busqueda, setBusqueda] = useState("");
    const [error, setError] = useState("");
    const [cargando, setCargando] = useState(false);

    const buscarPokemon = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        if (!busqueda.trim()) {
            setError("Ingresa un nombre o ID.");
            return;
        }

        setCargando(true);

        try {
            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda.toLowerCase().trim()}`);

            if (!respuesta.ok) throw new Error("Pokémon no encontrado en la base de datos.");

            const datos = await respuesta.json() as any;

            const nuevoPokemon: Pokemon = {
                id: datos.id,
                nombre: datos.name,
                imagen: datos.sprites.other["official-artwork"].front_default || datos.sprites.front_default,
                tipos: datos.types.map((t: any) => t.type.name),
                hp: datos.stats[0].base_stat,
                ataque: datos.stats[1].base_stat
            };

            agregarPokemon(nuevoPokemon);
            setBusqueda("");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setCargando(false);
        }
    };

    return (
        <form onSubmit={buscarPokemon} className="flex flex-col gap-4">
            {error && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl text-sm">
                    {error}
                </div>
            )}

            <div className="relative">
                <input
                    type="text"
                    placeholder="Ej: Pikachu o 25"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    disabled={cargando}
                    className="w-full bg-slate-900/50 border border-indigo-500/30 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all"
                />
            </div>

            <button
                disabled={cargando}
                className="w-full bg-gradient-to-r from-fuchsia-600 to-cyan-600 hover:from-fuchsia-500 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl shadow-[0_0_20px_rgba(192,38,211,0.4)] transform hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-sm"
            >
                {cargando ? "Escaneando..." : "Lanzar Pokeball"}
            </button>
        </form>
    );
}

export default FormularioPokemon;