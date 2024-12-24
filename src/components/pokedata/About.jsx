import { Capitalize } from '@/utils/Utils';
import React from 'react'

import { IoMdMale, IoMdFemale } from "react-icons/io";


function About({ pokemon, species }) {
    const getAbilities = () => {
        let ab = [];
        pokemon.abilities.map((a) => ab.push(a.ability.name));

        const formattedAbilities = ab
            .map((ability) => Capitalize(ability))
            .join(', ');

        return formattedAbilities;
    }


    return (
        <div>
            <section className='flex flex-col flex-grow space-y-4'>
                <div className="grid grid-cols-[150px,1fr] gap-x-3 gap-y-2">
                    <p className='text-gray-500'>Base Experience</p>
                    <p>{pokemon.base_experience}</p>
                </div>
                <div className="grid grid-cols-[150px,1fr] gap-x-3 gap-y-2">
                    <p className='text-gray-500'>Height</p>
                    <p>{pokemon.height / 10} m</p>
                </div>
                <div className="grid grid-cols-[150px,1fr] gap-x-3 gap-y-2">
                    <p className='text-gray-500'>Weight</p>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
                <div className="grid grid-cols-[150px,1fr] gap-x-3 gap-y-2">
                    <p className='text-gray-500'>Abilities</p>
                    <p>{getAbilities()}</p>
                </div>
            </section>

            <h2 className='font-bold text-lg mt-8 mb-3'>Breeding</h2>
            <section className='flex flex-col flex-grow space-y-3'>
                <div className="grid grid-cols-[150px,1fr] gap-x-3 gap-y-2">
                    <p className='text-gray-500'>Gender</p>
                    <p className='flex items-center'>
                        {species.gender_rate < 0 ? "Genderless" :
                            // species.gender_rate en octavos de ser hembra: 1 --> 1/8 = 12.5% de ser hembra
                            <>
                                <span className='text-blue-600'><IoMdMale /></span> {(8 - species.gender_rate) / 8 * 100}%
                                <span className='text-red-600 ml-5'><IoMdFemale /></span> {species.gender_rate / 8 * 100}%
                            </>
                        }
                    </p>
                </div>
                <div className="grid grid-cols-[150px,1fr] gap-x-3 gap-y-2">
                    <p className='text-gray-500'>Egg Groups</p>
                    <p>{Capitalize(species.egg_groups[0]?.name || "none")}</p>
                </div>
                <div className="grid grid-cols-[150px,1fr] gap-x-3 gap-y-2">
                    <p className='text-gray-500'>Egg Cycle</p>
                    <p>{Capitalize(species.egg_groups[1]?.name || "none")}</p>
                </div>
            </section>
        </div>
    )
}

export default About