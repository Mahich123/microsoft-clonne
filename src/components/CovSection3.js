import React,{ useState }from 'react'
import data from './data/data5'

function CovSection3() {
    const [cards, setcards] = useState(data)
    return (
        <section className="px-8 pt-8">
            <h2 className="m-8 ml-1 text-2xl py-5 mb-3 ttx">How we're helping our communities</h2>
             <div className="some">
                 {
                     cards.map((card) => {
                         const {image, text} = card
                       return  (
                           <article className="flex mb-8 gr">
                            
                               <div>
                                   <img className="img" src={image} />
                               </div>
                               <div className="text-lg ml-5 tx hover:underline cursor-pointer">
                                   <span>{text}</span>
                               </div>
                           
                           </article>
                       ) 
                         
                     })
                 }
             </div>
             <div className="py-6 px-8">
               
                 <ul className="link underline">
                  <li className="mb-5"><a href="#">Committing $110M more to help in Washington state</a></li>
                  <li className="mb-5"><a href="#">We’ve mobilized AI for Health and funding for virus research</a></li>
                  <li className="mb-5"><a href="#">How international health care organizations are using bots to help fight COVID-19</a></li>
                  <li className="mb-5"><a href="#">Meet some of the unseen experts behind Microsoft’s coronavirus response</a></li>
                  <li className="mb-5"><a href="#">Emergency plan has Microsoft Store employees helping people in new ways</a></li>
                 </ul>
            
            </div>
        </section>
    )
}

export default CovSection3
