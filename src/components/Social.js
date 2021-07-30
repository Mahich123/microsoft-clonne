import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Social() {
    return (
        <section className="flex items-center pb-10 py-6 px-8">
            <div className="mr-5">
                <h4 className="">Follow Microsoft</h4>
            </div>
            <div className="flex">
                <a href="https://www.facebook.com/Microsoft" target="_blank"><FacebookIcon className="mr-2 text-blue-900 cursor-pointer"/></a>
                <a href="https://twitter.com/microsoft" target="_blank"><TwitterIcon className="mr-2 text-blue-700 cursor-pointer"/></a>
                <a href="https://www.linkedin.com/company/microsoft" target="_blank"><LinkedInIcon className="text-blue-900 cursor-pointer"/></a>
            </div>
        </section>
    )
}

export default Social
