import React, { useEffect, useState } from 'react'
import Loading from '../Loading';
import { Capitalize } from '@/utils/Utils';

function Evolution({ species }) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!species || !species.evolution_chain) {
            setLoading(false);
            return;
        }

        const fetchEvolutionChain = async () => {
            try {
                const response = await fetch(species.evolution_chain.url)
                if (response.ok) {
                    const res = await response.json();
                    setData(res)
                }
                else {
                    throw new Error(response.status)
                }
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchEvolutionChain();
    }, [])

    const renderEvolutions = (chain) => {
        if (!chain) return null;
        const pokemonNumber = chain.species.url.split("https://pokeapi.co/api/v2/pokemon-species/")[1].split("/")[0];

        return (
            <div className='-mx-6'>
                <div className="flex flex-col items-center font-bold text-center bg-gray-100 p-3 rounded-xl shadow-sm">
                    {Capitalize(chain.species.name)}
                    {chain.evolution_details?.length > 0 && (
                        <span className="text-gray-500">
                            {chain.evolution_details[0].min_level && ` (Evolves at ${chain.evolution_details[0].min_level})`}
                        </span>
                    )}
                    <img className='w-[130px]' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNumber}.png`} alt="pokemon" />
                </div>



                {chain.evolves_to.length > 0 &&
                    chain.evolves_to.map((evolution, index) => (
                        <div key={index} className="mt-2">
                            {renderEvolutions(evolution)}
                        </div>
                    ))}
            </div>
        );
    };

    return (
        <>
            {
                loading ? <Loading /> :
                    (!data) ? "No data" :
                        <div className="flex flex-col items-center">
                            {renderEvolutions(data.chain)}
                        </div>
            }
        </>
    )
}

export default Evolution