import React,{ useState }from 'react'
import data from './data/data8'
import RssFeedIcon from '@material-ui/icons/RssFeed';

function CovSection3() {
    const [cards, setcards] = useState(data)
    return (
        <section className="px-4 ">
            <h2 className="Come m-8 ml-1 text-2xl py-5 mb-3">Research and academia</h2>
            
             <div className="py-6 px-8 ">
               
               <ul className="link underline">
                <li className="mb-5"><a href="#">Before the next pandemic: Lessons learned, and those still to be absorbed</a></li>
                <li className="mb-5"><a href="#">COVID-19 cloud testing platform has potential to help beyond pandemic</a></li>
                <li className="mb-5"><a href="#">Interactive visualizations help understand our progress against COVID-19</a></li>
                <li className="mb-5"><a href="#">Extracting COVID-19 insights from Bing search data</a></li>
                <li className="mb-5"><a href="#">Adaptive Biotechnologies and Microsoft launch groundbreaking ImmuneCODE database to share populationwide immune response to the COVID-19 virus</a></li>
                <li className="mb-5"><a href="#">Microsoft academic resources and their application to COVID-19 research</a></li>
              </ul>
          
          </div>

          <h2 className="Come m-8 ml-1 text-2xl py-5 mb-3">More news and informatin</h2>
            
             <div className="py-6 px-8">
               
               <ul className="link underline">
                <li className="mb-5"><a href="#">New study shows digital preparedness helped organizations adapt to COVID-19</a></li>
                <li className="mb-5"><a href="#">New study shows digital preparedness helped organizations adapt to technology</a></li>
                <li className="mb-5"><a href="#">Year of the Nurse: First responders build resilience with technology and data</a></li>
                <li className="mb-5"><a href="#">Microsoft in tech partnerships to assure successful COVID-19 vaccine delivery</a></li>
                <li className="mb-5"><a href="#">How Duke University and AI for Health raced to create a COVID-19 solution for patients</a></li>
                <li className="mb-5"><a href="#">How tech can support secure, safe and equitable vaccine distribution</a></li>
                <li className="mb-5"><a href="#">Bing COVID-19 tracker shows the latest for your area and around the world</a></li>
              </ul>
          
          </div>
             
         <div className="text-center bg-gray-400 py-3 m-2 ">
             <button>Foolow us: <span><RssFeedIcon /></span></button>
        </div>
        </section>
    )
}

export default CovSection3
