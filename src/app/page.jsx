import React from 'react'
import data from '@/data/pokemon.json'
import Link from 'next/link'

import { BsArrowLeft } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";

// Pagina del indice
// Soy consciente de que no es necesario, pero por simpleza lo he hecho tambien
function Home() {
  return (
    <>
      <nav className='relative w-full text-xl items-center flex justify-between px-5 mb-5 mt-16'>
        <div className='text-2xl z-20 cursor-pointer'><BsArrowLeft /></div>
        <div className='z-20 cursor-pointer'><FaListUl /></div>
      </nav>

      <main className='px-5'>
        {/* Titulo */}
        <h1 className='font-bold text-4xl text-gray-900 mb-5'>Pokedex</h1>

        {/* Grid que contiene los pokemons */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {
            // Mapeamos los datos del archivo json (creado archivo comodidad)
            // (NO seria la forma de hacerlo eficiente, es para el ejemplo)
            data.map((pokemon, i) => {
              const types = pokemon.types.split(", ")

              return (
                <Link href={`./pokemon/${(pokemon.name).toLowerCase()}`} key={i} className={`relative flex flex-col min-h-[130px] ${types[0]} text-white px-5 pt-6 shadow-xl rounded-2xl overflow-hidden`}>
                  {/* Nombre del pokemon */}
                  <h2 className='font-bold text-lg z-20'>{pokemon.name}</h2>

                  {/* Tipos del pokemon, mapeados previamente de -> const types */}
                  <div className={`flex flex-col space-y-[6px] mt-2`}>
                    {types.map((type, j) => (
                      <div className={`${types[0]} w-fit rounded-full z-20`}>
                        <h1 className='bg-white bg-opacity-20 text-xs rounded-full w-fit px-3 py-[2px]'>{type}</h1>
                      </div>
                    ))}
                  </div>

                  {/* Numero de la pokedex del pokemon */}
                  <span className='absolute top-3 right-3 font-bold text-black text-xl text-opacity-10 z-40'>#{pokemon.number}</span>


                  {/* Imagen de la pokeball de fondo */}
                  <img className='absolute opacity-15 w-[120px] -right-5 -bottom-8' src='/images/pokeball.png' alt='pokeball'></img>
                  {/* Imagen del pokemon */}
                  <img className='absolute w-[85px] bottom-0 right-0' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.image}.png`} alt="poke"></img>
                </Link>
              )
            })
          }
        </div>
      </main>
    </>
  )
}

export default Home