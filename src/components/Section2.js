import React, { useState } from 'react'
import {data} from './data/data2'

function Section1() {
    const [cards, setcards] = useState(data)
    return (
        <div className="md:grid grid-cols-2 xl:grid grid-cols-4">
            {cards.map((card) => {
                const {id, image, text, desc, link} = card

                return (
                    <article key="id" className="p-5">
                        <img src={image} className="mb-4"/>
                        <h1 className="font-semibold text-xl mb-1">{desc}</h1>
                        <p >{text}</p>
                        <button className="cursor-pointer text-blue-500">{link}</button>
                    </article>
                )
            })}
          
        </div>
    )
}

export default Section1
