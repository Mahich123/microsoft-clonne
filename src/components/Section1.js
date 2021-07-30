import React, { useState } from 'react'
import {data} from './data/data'

function Section1() {
    const [cards, setcards] = useState(data)
    return (
        <section className="md:grid grid-cols-2 xl:grid grid-cols-6 my-8">
            {cards.map((card) => {
                const {id, image, text,link} = card

                return (
                    <article key="id" className="m-2 flex items-center px-5 py-3">
                        <img src={image} alt="microsoft"/>
                       <a href={link}><p className="ml-4  hover:underline font-semibold cursor-pointer">{text}</p></a>
                    </article>
                )
            })}
          
        </section>
    )
}

export default Section1
