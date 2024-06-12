import React from 'react'
import ProductBox from '../../componnents/ProductBox/ProductBox'
import img from './../../assets/images/Product/product_01.png'

const Products = () => {
  return (
    <div>Products
        <ProductBox img={img} title_1="للتنحيف و انقاص الوزن"
        title_2="شاي اخضر سوري مع التوت البري"
        title_3="خلطة طبيعية و مدعمة للتنحيف و انقاص الوزن"
        brandName="a vie" productNum={8} weight="55G" encapsolation="معبأة في كيس نايلون وعلبة كرتون خاصة"
        numInPackage={10}
      />
    </div>
  )
}

export default Products