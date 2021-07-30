import React, {useState} from 'react'
import data from './footer'
import PublicIcon from '@material-ui/icons/Public';

function Footer1() {
    const [links, setLinks] = useState(data)
    return (
        <>
        <footer className="bg-gray-200 list-none px-8 py-8 md:grid grid-cols-2 xl:grid grid-cols-6">
            {links.map((link) => {
                const {id, title, hrefs} = link
                return (
                    <div>
                        <div className="mb-8">
                            <h4 className="font-semibold text-gray-600">{title}</h4>
                            {hrefs.map((href) => {
                                return ( 
                                
                                <li key={hrefs} className="text-gray-400 text-sm my-2 hover:underline">{href}</li>
                                )
                            })}
                        </div>
                    
                    </div>
                )
            })}
             </footer>
            <div className="bg-gray-200 px-8 pb-5 md:flex items-center justify-between">
            <div className="flex items-center text-gray-600">
                <PublicIcon className="mr-3"/>
                <p className="text-sm hover:underline">English (United States)</p>
            </div>
             <div >
                 <ul className="flex text-sm flex-wrap mt-6 text-gray-600 ">
                     <li className="mr-7 mb-3 hover:underline">Sitemap</li>
                     <li className="mr-7 mb-3 hover:underline">Contact Microsoft</li>
                     <li className="mr-7 mb-3 hover:underline">Privacy</li>
                     <li className="mr-7 mb-3 hover:underline">Terms of use</li>
                     <li className="mr-7 mb-3 hover:underline">Trademarks</li>
                     <li className="mr-7 mb-3 hover:underline">Safety &amp; eco</li>
                     <li className="mr-7 mb-3 hover:underline">about our ads</li>
                     <li className="mr-7 mb-3 hover:underline"> © Microsoft 2021</li>
                 </ul>
             </div>
            </div>
       
        </>
    )
}

export default Footer1
