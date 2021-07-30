import React,{ useState }from 'react'
import data from './data/data6'

function CovSection3() {
    const [cards, setcards] = useState(data)
    return (
        <section className="px-4">
            <h2 className="m-8 ml-1 text-2xl py-5 mb-3 ttx">Doing business remotely and returning to work safely</h2>
             <div className="some ">
                 {
                     cards.map((card) => {
                         const {image, text} = card
                       return  (
                           <article className="flex mb-8 gr">
                           
                               <div>
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
                <li className="mb-5"><a href="#">A pulse on employees’ wellbeing, six months into the pandemic</a></li>
                <li className="mb-5"><a href="#">New tools boost wellbeing and soothe the stresses of working from home</a></li>
                <li className="mb-5"><a href="#">Take steps toward a more comfortable and healthy workspace</a></li>
                <li className="mb-5"><a href="#">New ways to make virtual interactions more natural, engaging and human</a></li>
                <li className="mb-5"><a href="#">How Microsoft Teams safeguards virtual conversations and protects users’ privacy</a></li>
                <li className="mb-5"><a href="#">What the disability community can teach everyone about working remotely</a></li>
               
               </ul>
          
          </div>
             
        </section>
    )
}

export default CovSection3
