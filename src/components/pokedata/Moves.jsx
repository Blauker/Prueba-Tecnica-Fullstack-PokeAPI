import { Capitalize } from '@/utils/Utils'
import React from 'react'

function Moves({ pokemon }) {
    return (
        <div className='flex flex-wrap gap-2'>
            {pokemon.moves.map((move, i) => (
                <div key={i} className="bg-gray-100 px-3 py-[2px] rounded-md border shadow-sm w-full">
                    {Capitalize(move.move.name)}
                    {
                        move.version_group_details[0].level_learned_at !== 0 &&
                        <span className='text-xs'> (Learned at level: {move.version_group_details[0].level_learned_at})</span>
                    }
                </div>
            ))}
        </div>
    )
}

export default Moves