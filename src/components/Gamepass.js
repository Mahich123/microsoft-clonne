import React from 'react'

function Gamepass() {
    return (
        <section className="px-4">
            <div>
            <img className="w-full" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OUXd?ver=fcb0&q=0&m=8&h=303&w=539&b=%23FFFFFFFF&l=f&x=1123&y=914&s=775&d=436&aim=true" />
            </div>
            <div className="game text-center p-10 text-white">
                <h2 className="font-semibold text-xl">Xbox Game Pass Ultimate</h2>
                <p className="py-5 px-.5">Get your first month of membership for $1. Play on the devices you own. Includes EA Play. Offer available to new subscribers only.</p>
                <a href="https://www.xbox.com/en-US/promotions/sales/ultimate-game-sale?icid=mscom_marcom_MPH1a_Store_UGS22"><button className="bg-white text-black px-3 py-2 mr-5 hover:underline hover:bg-opacity-60">Join now</button></a>
                <a href="https://www.microsoft.com/en-us/store/collections/pcugsp2p21?icid=mscom_marcom_MPH1b_Store_UGS22"><button className="hover:underline">Compare all plans</button></a>
            </div>
        </section>
    )
}

export default Gamepass
