import React from 'react'
import { Link } from 'react-router-dom'
import arrow_navigate from './../../assets/images/arrow_navigate.svg'
import { BigNavigationLinksProps } from '../../types/types';


const BigNavigationLinks_Brands: React.FC<BigNavigationLinksProps> = ({
    navigateMain,
    navigateLinkMain,
    navigateLinkSubmain,
    navigateSubmain,
}) => {
    return (
        <div className='BigNavigationLinks'>
            <span className='Navigate-main'>{navigateMain}</span>
            <Link to='/' className='Navigate-link'>{navigateLinkMain}</Link>
            <img src={arrow_navigate} alt="arrow_navigate" />
            <Link to='/brands' className='Navigate-link'>{navigateLinkSubmain}</Link>
            <img src={arrow_navigate} alt="arrow_navigate" />
            <span className='Navigate-submain'>{navigateSubmain}</span>
        </div>
    );
};
export default BigNavigationLinks_Brands


