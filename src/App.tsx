import { useEffect, useState } from "react";
import FormularioPokemon from "./components/FormularioPokemon";
import ListaPokemon from "./components/ListaPokemon";
import { type Pokemon } from "./types/Pokemon";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>(() => {
    try {
      const datos = localStorage.getItem("pokedex");
      return datos ? JSON.parse(datos) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("pokedex", JSON.stringify(pokemons));
  }, [pokemons]);

  const agregarPokemon = (nuevoPokemon: Pokemon) => {
    const existe = pokemons.some((p) => p.id === nuevoPokemon.id);
    if (existe) {
      alert("¡Ya capturaste a este Pokémon!");
      return;
    }
    setPokemons([...pokemons, nuevoPokemon]);
  };

  const liberarPokemon = (id: number) => {
    setPokemons(pokemons.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-black p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">

        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 pb-2 leading-tight drop-shadow-lg tracking-tight">
            Mi Pokedex Pro
          </h1>
          <p className="text-cyan-200 mt-2 text-lg font-medium tracking-wide">
            Práctica de React + TypeScript + Async/Await
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_0_40px_rgba(192,38,211,0.15)]">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-fuchsia-400">⚡</span> Radar Pokémon
              </h2>
              <FormularioPokemon agregarPokemon={agregarPokemon} />
            </div>
          </section>

          <section className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 h-full">
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <h2 className="text-2xl font-bold text-white">Colección</h2>
                <span className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white px-4 py-1 rounded-full font-bold shadow-lg">
                  {pokemons.length} Capturados
                </span>
              </div>
              <ListaPokemon pokemons={pokemons} liberarPokemon={liberarPokemon} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;