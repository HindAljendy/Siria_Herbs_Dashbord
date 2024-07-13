import React  from 'react';
import './updateCategory.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BigNavigationLinks_Categories from '../../BigNavigationLinks/BigNavigationLinks_Categories';
import CategoryForm from '../CategoryForm';

const UpdateCategory = () => {
    
    return (
        <div>
            <BigNavigationLinks_Categories
                navigateMain='  تعديل فئة'
                navigateLinkMain='الواجهة الرئيسية'
                navigateLinkSubmain=' الفئات'
                navigateSubmain='تعديل '

            />
            <CategoryForm TitleCategory="تعديل فئة من النظام"/>
        </div>
    );
};

export default UpdateCategory;
