import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Modal from "@/components/Modal";

interface Pokemon {
    name: string;
    url: string;
}

interface PokemonDetails {
    name: string;
    image: string;
    types: string[];
}
type ApiResponse = {
    results: Pokemon[];
    next: string | null;
};
const Home: React.FC = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(20);
    const [category, setCategory] = useState("");
    const [hasMore, setHasMore] = useState<boolean>(true);
    const observer = useRef<IntersectionObserver | null>(null);
    const lastPokemonRef = useRef<HTMLDivElement | null>(null);
    const [isOpoen, setIsOpen] = useState(false);
    const [isSlide, setIsSlide] = useState(true);
    const [title, setTitle] = useState("");

    const openModal = (judul: string) => {
        setTitle(judul);
        setIsOpen(true);
        setIsSlide(true);
        // document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsSlide(false);
        setTimeout(() => {
            setIsOpen(false);
            // document.body.style.overflow = "auto";
        }, 90);
    };
    useEffect(() => {
        const fetchPokemon = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=900}`);
                setTimeout(() => {
                    setLoading(false);
                }, 100);
                const newPokemons = response.data.results;
                console.log(newPokemons);

                setPokemonList(newPokemons);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
            }
        };

        fetchPokemon();
    }, [limit]);

    useEffect(() => {
        setFilteredPokemons(pokemonList);
    }, [pokemonList]);

    const handleFilterChange = async (type: string) => {
        if (type === "All") {
            setFilteredPokemons(pokemonList);
        } else {
            const filtered = await Promise.all(
                pokemonList.map(async (pokemon) => {
                    const response = await axios.get(pokemon.url);
                    console.log(response);

                    const { types } = response.data;
                    const pokemonTypes = types.map((t: { type: { name: string } }) => t.type.name);
                    return { ...pokemon, types: pokemonTypes };
                })
            );

            const filteredByType = filtered.filter((pokemon) =>
                pokemon.types.includes(type.toLowerCase())
            );

            setFilteredPokemons(filteredByType);
        }
    };

    const handlePokemonClick = async (pokemon: Pokemon) => {
        try {
            const response = await axios.get(pokemon.url);
            const { name, sprites, types } = response.data;
            const image = sprites.front_default;
            const pokemonDetails: PokemonDetails = {
                name,
                image,
                types: types.map((t: { type: { name: string } }) => t.type.name),
            };
            setSelectedPokemon(pokemonDetails);
            if (selectedPokemon) {
                openModal("Detail");
            }
        } catch (error) {
            console.error("Error fetching Pokémon details:", error);
        }
    };

    return (
        <div className='bg-white'>
            <div>
                <div className='fixed top-0 bg-white w-full p-4'>
                    <h1>Pokémon Browser</h1>
                    <select onChange={(e) => handleFilterChange(e.target.value)}>
                        <option value='All'>All</option>
                        <option value='fire'>Fire</option>
                        <option value='water'>Water</option>
                        <option value='grass'>Grass</option>
                        <option value='electric'>Electric</option>
                        <option value='steel'>Steel</option>
                        <option value='fairy'>Fairy</option>
                        <option value='rock'>Rock</option>
                        <option value='psychic'>Psychic</option>
                        <option value='flying'>Flying</option>
                        <option value='dark'>Dark</option>
                        <option value='poison'>Poison</option>
                        <option value='normal'>Normal</option>
                    </select>
                </div>
                <div className='mt-28 flex flex-wrap gap-10 w-full justify-center'>
                    {filteredPokemons.map((pokemon, index) => (
                        <div
                            key={index}
                            onClick={() => handlePokemonClick(pokemon)}
                            className='border w-2/12 py-6 shadow-sm hover:shadow-2xl cursor-pointer hover:bg-emerald-950 hover:text-yellow-400 hover:border-amber-400'>
                            <h3 className='text-center font-medium '>{pokemon.name}</h3>
                        </div>
                    ))}
                </div>
                {loading && <div>Loading....</div>}

                <Modal
                    closeModal={closeModal}
                    isOpen={isOpoen}
                    isSlide={isSlide}
                    openModal={openModal}
                    title={title}>
                    {selectedPokemon && (
                        <div className='h-96 w-full item-center '>
                            <h2 className='text-center'>{selectedPokemon.name}</h2>
                            <img
                                className='m-auto w-36'
                                src={selectedPokemon.image}
                                alt={selectedPokemon.name}
                            />
                            <p className='text-center'>Types: {selectedPokemon.types.join(", ")}</p>
                        </div>
                    )}
                </Modal>
            </div>
        </div>
    );
};

export default Home;
