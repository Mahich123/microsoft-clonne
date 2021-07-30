import React from 'react'
import { Link } from 'react-router-dom'

  

function Cov() {
    return (
        <section className="cov mx-4 p-10 text-center mb-10">
            <h2 className="font-bold text-2xl ">Microsoft's response to COVID-19</h2>
            <p className="mt-3 mb-2">Read how we’re responding to the COVID-19 outbreak, and get resources to help.</p>
            <Link to="/covid"><button className="font-semibold hover:underline">Learn more</button></Link>
        </section>
    )
}

export default Cov
