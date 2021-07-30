import React from 'react'
import "./Hero.css";
function Hero() {
    return (
        <section className="px-4">
            <div>
             <img className="w-full" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4P5Mq?ver=d195&q=0&m=8&h=472&w=1259&b=%23FFFFFFFF&l=f&x=173&y=323&s=2568&d=963&aim=true" alt="microsoft"/> 
            </div>
            <div className="overlay content  text-center py-10 ">
                <p className="ult bg-black inline-block mb-3">Ultimate Game Sale</p>
                <h1 className="font-bold">Save big on select Xbox and PC games</h1>
                <p className="">Turn up the thrills with unreal deals on select Xbox and PC titles. Sale ends August 5.</p>
               <a href="https://www.microsoft.com/en-us/d/surface-laptop-go/94fc0bdgq7wv?icid=mscom_marcom_H1a_SurfaceLaptopGoOffer_11830T2_Store_BST22&activetab=pivot%3aoverviewtab"><button className="bg-black text-white hover:underline hover:opacity-80 p-3 mt-5">Shop Xbox games</button></a>
            </div>
        </section>
    )
}

export default Hero
