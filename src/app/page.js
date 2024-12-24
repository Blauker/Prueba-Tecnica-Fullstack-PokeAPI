import React from 'react'
import data from '@/data/pokemon.json'
import Link from 'next/link'

function Home() {
  return (
    <main>
      <h1 className='font-bold text-4xl text-gray-900 mb-5'>Pokedex</h1>

      <div className='grid grid-cols-2 gap-4'>
        {
          data.map((pokemon, i) => {
            const types = pokemon.types.split(", ")

            return (
              <Link href={`./${pokemon.name}`} key={i} className={`relative flex flex-col min-h-[150px] ${types[0]} text-white px-5 pt-6 shadow-xl rounded-3xl overflow-hidden`}>
                <h2 className='font-bold text-lg z-20'>{pokemon.name}</h2>

                <div className={`flex flex-col space-y-[6px] mt-2`}>
                  {types.map((type, j) => (
                    <div className={`${types[0]} w-fit rounded-full z-20`}>
                      <h1 className='bg-white bg-opacity-20 text-xs rounded-full w-fit px-6 py-1'>{type}</h1>
                    </div>
                  ))}
                </div>

                <span className='absolute top-3 right-3 font-bold text-black text-xl text-opacity-10 z-30'>#{pokemon.number}</span>
                <img className='absolute opacity-20 w-[150px] -right-4 -bottom-8' src='/images/pokeball.png' alt='pokeball'></img>
                <img className='absolute w-[120px] bottom-0 right-2' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.image}.png`} alt="a"></img>
              </Link>
            )
          })
        }
      </div>
    </main>
  )
}

export default Home