import React,{ useState }from 'react'
import data from './data/data7'

function CovSection3() {
    const [cards, setcards] = useState(data)
    return (
        <section className="px-4">
            <h2 className="m-8 ml-1 text-2xl py-5 mb-3 ttx">Resources for educators and families</h2>
             <div className="some ">
                 {
                     cards.map((card) => {
                         const {image, text} = card
                       return  (
                           <article className="flex mb-8 gr">
                         
                               <div>
                                   <img  className="img" src={image} />
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
                <li className="mb-5"><a href="#">Disruptions and opportunities: lessons from the spring of 2020</a></li>
                <li className="mb-5"><a href="#">Schools after COVID-19: from a teaching culture to a learning culture</a></li>
                <li className="mb-5"><a href="#">Developing students’ social and emotional skills during remote learning</a></li>
                <li className="mb-5"><a href="#">UNICEF and Microsoft launch global learning platform to help address COVID-19 education crisis</a></li>
                <li className="mb-5"><a href="#">Tips for your at-home students with disabilites</a></li>
              </ul>
          
          </div>
             
        </section>
    )
}

export default CovSection3
