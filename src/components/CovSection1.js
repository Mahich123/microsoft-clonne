import React,{useState} from 'react'
import {data} from './data/data4'
import "./CovSection1.css";

function CovSection1() {
    const [cards, setcards] = useState(data)
    return (
        <section>
            <div className="font-semibold text-3xl text-center m-5  px-10 py-10">
               <h1>Responding to COVID-19 together</h1>
            </div>
            <div className="somes">
            {cards.map((card) => {
                const {icon, text, para} = card

                return (
                
                    <article key="id" className=" flex items-center px-5 py-3">
                    
                        <div className="icons">
                        {card.icon}
                        </div>
                        <div className="ml-6 head">
                        <h2 className="text-sm  mt-3 font-semibold ico">{text}</h2>
                       
                        <p className="para">{para}</p>
                        </div>
                        
                    </article>
                
                )
            })}
            </div>
        </section>
    )
}

export default CovSection1
