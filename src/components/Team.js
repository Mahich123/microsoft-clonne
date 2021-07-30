import React from 'react'

function Team() {
    return (
        <section className="py-7 px-4">
            <div>
              <img className="w-full " src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWH6aY?ver=b216&q=0&m=8&h=303&w=539&b=%23FFFFFFFF&l=f&x=1088&y=287&s=1909&d=1073&aim=true" />
            </div>
            <div className="team text-center py-20">
                <h2 className="font-bold mb-2 text-white text-xl">Where there's a team, there's a way</h2>
                <p className="mb-2 text-white">When the world couldn’t go to Tokyo, Microsoft Teams brought Tokyo to them</p>
               <a href="https://inculture.microsoft.com/tokyo-teams/?icid=mscom_marcom_SAM1a"><button className="bg-white py-3 px-3 mt-5 hover:underline hover:bg-opacity-80">Exoplore more</button></a>
            </div>
        </section>
    )
}

export default Team
