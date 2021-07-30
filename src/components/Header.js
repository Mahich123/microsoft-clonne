import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

function Header() {
    return (
        <header className="header flex items-center justify-between py-3 xl:mx-20">
          <div className="menu-btn flex mx-4">
            <div className="mr-4">
               <MenuIcon />
            </div>
            <div>
              <SearchIcon />
            </div>
          </div>
          <div className="logo">
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="microsoft"/>
          </div>
      

          <div className="cart flex mx-4">
          <div>
              <ShoppingCartOutlinedIcon />
          </div>
          <div className="ml-4">
              <AccountCircleOutlinedIcon />
          </div>
          </div>

         

        </header>
    )
}

export default Header




