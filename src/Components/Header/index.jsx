import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './header.css'
import { useStateValue } from '../../Config/Provider';



const Header = () => {
    const [{basket}] = useStateValue()
    return (
        <nav className='header'>
            <Link to='/'>
                <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon-logo' />
            </Link>
            <div className='search_header'>
                <input type="text" className="header_search" />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className='link_nav'>
                <Link to='/login' className='nav_link'>
                    <div className="option_nav">
                        <span className='option_navOne'>Hello, Adhen</span>
                        <span className='option_navTwo' >Sign In </span>
                    </div>
                </Link>
                <Link to='/' className='nav_link'>
                    <div className="option_nav">
                        <span className='option_navOne'>Return</span>
                        <span className='option_navTwo'>& Order </span>
                    </div>
                </Link>
                <Link to='/' className='nav_link'>
                    <div className="option_nav">
                        <span className='option_navOne'>Your </span>
                        <span className='option_navTwo'>Prime </span>
                    </div>
                </Link>
                <Link to="/checkout" className='nav_link basket_link'>
                    <div className='option_basket'>
                        <ShoppingBasketIcon />
                        <span className='option_navTwo basket_count'>{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </nav>
    )
}

export default Header