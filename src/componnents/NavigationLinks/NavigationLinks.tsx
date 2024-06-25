import React from 'react'
import './NavigationLinks.css'
import arrow_navigate from './../../assets/images/arrow_navigate.svg'
import { Link } from 'react-router-dom'
import { NavigationLinksProps } from '../../types/types';


const NavigationLinks: React.FC<NavigationLinksProps> = ({
    navigateMain,
    navigateLink,
    navigateSubmain,
}) => {
    return (
        <div className='NavigationLinks'>
            <span className='Navigate-main'>{navigateMain}</span>
            <Link to='/' className='Navigate-link'>{navigateLink}</Link>
            <img src={arrow_navigate} alt="arrow_navigate" />
            <span className='Navigate-submain'>{navigateSubmain}</span>
        </div>
    );
};

export default NavigationLinks;