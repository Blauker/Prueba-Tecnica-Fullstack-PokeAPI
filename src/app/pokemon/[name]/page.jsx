"use client";

import Loading from '@/components/Loading';
import About from '@/components/pokedata/About';
import Evolution from '@/components/pokedata/Evolution';
import Moves from '@/components/pokedata/Moves';
import Stats from '@/components/pokedata/Stats';
import { Capitalize, PokedexNumber } from '@/utils/Utils';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { BsArrowLeft } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

function Pokemon() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const [species, setSpecies] = useState(null);
  const [tab, setTab] = useState(1)

  useEffect(() => {
    if (!name) { setLoading(false); return; }

    const fetchData = async () => {
      try {
        // fetch al endpoint de pokeapi con el nombre del pokemon
        const responsePoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const responseSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)

        // Validamos la respuesta
        if (responsePoke.ok && responseSpecies.ok) {
          const resPoke = await responsePoke.json()
          const resSpecies = await responseSpecies.json()

          setPokemon(resPoke) // guardamos los datos
          setSpecies(resSpecies) // guardamos los datos
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
    fetchData();
  }, [])

  return (
    <>
      {
        loading ? <Loading /> :
          (!pokemon || !species) ? "No data" :
            <div className={`${pokemon.types[0].type.name} text-white min-h-screen flex flex-col`}>
              <nav className='relative w-full text-xl items-center flex justify-between px-5 pb-5 pt-10'>
                <Link href={"/"} className='text-2xl z-20 cursor-pointer'><BsArrowLeft /></Link>
                <div className='z-20 cursor-pointer'><FaRegHeart /></div>
              </nav>

              <main className='flex flex-col flex-grow'>
                {/* Pokemon / Types --------- # number */}
                <div className="flex justify-between items-center px-5">

                  {/* Pokemon / Types */}
                  <div className="flex flex-col">
                    <h1 className='font-bold text-4xl'>{Capitalize(pokemon.name)}</h1> {/* Pokemon */}
                    <ul className="flex space-x-2 mt-2"> {/* (Type) (Type) */}
                      {pokemon.types.map((type, i) => (
                        <li key={i} className='px-4 py-[2px] bg-white text-sm bg-opacity-20 rounded-full'>{Capitalize(type.type.name)}</li>
                      ))}
                    </ul>
                  </div>

                  {/* # number */}
                  <div className="font-bold text-xl">#{PokedexNumber(pokemon.id)}</div>
                </div>

                {/* Pokemon Image */}
                <div className="relative w-full h-[250px] flex justify-center overflow-hidden">
                  <div className="absolute bottom-0 left-0 bg-white w-full h-[30px] rounded-t-full"></div>
                  <img className='absolute opacity-25 w-[220px] -right-5 -bottom-4' src='/images/pokeball2.png' alt='pokeball'></img>
                  <img className='absolute -bottom-4 w-[250px]' src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
                </div>


                {/* QUIERO QUE ESTO DE AQUI OCUPE LO QUE QUEDA DE PANTALLA EN VERTICAL AHORA NO FUNCIONA */}
                {/* Information about the pokemon, (TABS) */}
                <div className="bg-white text-gray-950 px-8 pt-2 pb-6 -mt-1 flex flex-col flex-grow">
                  <ul className='flex justify-between text-gray-300'>
                    <li className={`cursor-pointer hover:text-gray-950 ${tab === 1 && "text-gray-950 font-bold"}`} onClick={() => setTab(1)}>About</li>
                    <li className={`cursor-pointer hover:text-gray-950 ${tab === 2 && "text-gray-950 font-bold"}`} onClick={() => setTab(2)}>Base Stats</li>
                    <li className={`cursor-pointer hover:text-gray-950 ${tab === 3 && "text-gray-950 font-bold"}`} onClick={() => setTab(3)}>Evolution</li>
                    <li className={`cursor-pointer hover:text-gray-950 ${tab === 4 && "text-gray-950 font-bold"}`} onClick={() => setTab(4)}>Moves</li>
                  </ul>

                  <hr className='my-3' /> 

                  {
                    tab === 1 ? <About pokemon={pokemon} species={species} /> :
                      tab === 2 ? <Stats pokemon={pokemon} /> :
                        tab === 3 ? <Evolution species={species} /> :
                          <Moves pokemon={pokemon} />
                  }
                </div>


              </main>
            </div>
      }
    </>
  )
}

export default Pokemon