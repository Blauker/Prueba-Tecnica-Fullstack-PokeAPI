import { Capitalize } from '@/utils/Utils'
import React from 'react'

function Stats({ pokemon }) {
    const calculateTotalStat = () => {
        let total = 0;
        pokemon.stats.map((stat) => (total += stat.base_stat))
        return total;
    }

    const round = (number) => {
        return Math.round(number);
    };

    return (
        <div>
            <section className='flex flex-col flex-grow space-y-4'>
                {pokemon.stats.map((stat, i) => {
                    return (
                        <div key={i} className="grid grid-cols-[130px,50px,1fr] space-x-3 items-center">
                            <p className='text-gray-500'>{Capitalize(stat.stat.name)}</p>
                            <p className='font-semibold'>{stat.base_stat}</p>
                            <div className="relative w-full max-w-[400px] h-[5px] bg-gray-200 rounded-full">
                                <div
                                    style={{ width: `${round(stat.base_stat / 255 * 100)}%` }}
                                    className={`absolute h-[5px] bg-green-400 rounded-full`}>
                                </div>
                            </div>
                        </div>
                    )
                })}

                <div className="grid grid-cols-[130px,50px,1fr] space-x-3 items-center">
                    <p className='text-gray-500'>Total</p>
                    <p className='font-semibold'>{calculateTotalStat()}</p>
                    <div className="relative w-full max-w-[400px] h-[5px] bg-gray-200 rounded-full">
                        <div
                            style={{ width: `${round(calculateTotalStat() / (255 * 6) * 100)}%` }}
                            className={`absolute h-[5px] bg-green-400 rounded-full`}>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Stats