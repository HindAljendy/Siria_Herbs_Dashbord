import React from 'react'
import arrow_navigate from './../../assets/images/arrow_navigate.svg'
import { Link } from 'react-router-dom'
import { NavigationLinksProps_Settings } from '../../types/types';



const NavigationLinks_Settings: React.FC<NavigationLinksProps_Settings> = ({
    navigateMain,
    navigateLink,
    navigateSubmain,
    navigateSubmain2
}) => {
    return (
        <div className='NavigationLinks'>
            <span className='Navigate-main'>{navigateMain}</span>
            <Link to='/' className='Navigate-link'>{navigateLink}</Link>
            <img src={arrow_navigate} alt="arrow_navigate" />
            <span className='Navigate-submain'>{navigateSubmain}</span>
            <img src={arrow_navigate} alt="arrow_navigate" />
            <span className='Navigate-submain'>{navigateSubmain2}</span>
        </div>
    );
};
export default NavigationLinks_Settings