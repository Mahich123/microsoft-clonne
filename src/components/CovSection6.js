import React,{ useState }from 'react'
import data from './data/data8'

function CovSection3() {
    const [cards, setcards] = useState(data)
    return (
        <section className="px-4">
            <h2 className="m-8 ml-1 text-2xl py-5 mb-3 ttx">Tips and techniacl support for doing more online</h2>
             <div className="some">
                 {
                     cards.map((card) => {
                         const {image, text} = card
                       return  (
                           <article className="flex mb-8 gr">
                             
                               <div className="">
                                   <img className="img" src={image} />
                               </div>
                               <div className="text-lg ml-3 tx hover:underline cursor-pointer">
                                   <span>{text}</span>
                               </div>
                               
                           </article>
                       ) 
                         
                     })
                 }
             </div>
             <div className="py-6 px-8">
               
               <ul className="link underline">
                <li className="mb-5"><a href="#">Empowering your remote workforce with security awareness</a></li>
                <li className="mb-5"><a href="#">7 principles for preserving privacy while addressing COVID-19</a></li>
                <li className="mb-5"><a href="#">IT essentials for enabling remote work with Microsoft Teams</a></li>
                <li className="mb-5"><a href="#">Take these steps to enable your firstline workers today</a></li>
                <li className="mb-5"><a href="#">Enable security and management for your remote workforce</a></li>
                <li className="mb-5"><a href="#">Protecting your data and maintaining compliance in a remote work environment</a></li>
              </ul>
          
          </div>
             
        </section>
    )
}

export default CovSection3
