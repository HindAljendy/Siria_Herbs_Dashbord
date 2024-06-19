import React from 'react'
import './ProductsOperationsSection.css'
import seach_icon from './../../assets/images/Product/search.svg'
import addProduct_icon from './../../assets/images/Product/add_icon.svg'
import filter_icon from './../../assets/images/Product/filter_icon.svg'
import { Link } from 'react-router-dom'


const ProductsOperationsSection = () => {
    return (
        <div className='HJ_ProductsOperationsSection'>
            <div className="HJ_content_Operations d-flex">
                <form className='d-flex'>
                    <input type="text" name="search by name" placeholder='البحث عن طريق الاسم' className='HJ_inputSearch' />
                    <button className='HJ_btnSearch HJ_styleBtn'>
                        <img src={seach_icon} alt="seach_icon" />
                        بحث
                    </button>
                </form>
                
                <div className="HJ_buttonsGroup">
                    <Link to='/products/addProduct'>
                        <button  className='HJ_btn_AddProduct HJ_styleBtn'>
                            <img src={addProduct_icon} alt="addProduct" className='HJ_IMG_btn' />
                            اضافة منتج
                        </button>
                    </Link>

                    <button className='HJ_btn_filter HJ_styleBtn'>
                        <img src={filter_icon} alt="filter_icon" className='HJ_IMG_btn' />
                        فلترة حسب التصنيف
                    </button>

                    <button className='HJ_btn_filter HJ_styleBtn'>
                        <img src={filter_icon} alt="filter_icon" className='HJ_IMG_btn' />
                        فلترة حسب البراند
                    </button>

                </div>

            </div>
        </div>
    )
}

export default ProductsOperationsSection