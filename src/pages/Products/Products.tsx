import React from 'react'
import './Products.css'
import ProductBox from '../../componnents/ProductBox/ProductBox'
import img from './../../assets/images/Product/product_01.png'
import NavigationLinks from '../../componnents/NavigationLinks/NavigationLinks'
import ProductsOperationsSection from '../../componnents/ProductsOperationsSection/ProductsOperationsSection'


const Products = () => {
  return (
    <div className='HJ_MarginBottom'>
      <NavigationLinks
        navigateMain='المنتجات'
        navigateLink='الواجهة الرئيسية' navigateSubmain='المنتجات'
      />
      <ProductsOperationsSection />
      
      <div className="HJ_AllProducts">
        <div className='d-flex   align-center HJ_gap'>
          <ProductBox img={img} title_1="للتنحيف و انقاص الوزن"
            title_2="شاي اخضر سوري مع التوت البري"
            title_3="خلطة طبيعية و مدعمة للتنحيف و انقاص الوزن"
            brandName="a vie" productNum={8} weight="55G" encapsolation="معبأة في كيس نايلون وعلبة كرتون خاصة"
            numInPackage={10}
          />
          <ProductBox img={img} title_1="للتنحيف و انقاص الوزن"
            title_2="شاي اخضر سوري مع التوت البري"
            title_3="خلطة طبيعية و مدعمة للتنحيف و انقاص الوزن"
            brandName="a vie" productNum={8} weight="55G" encapsolation="معبأة في كيس نايلون وعلبة كرتون خاصة"
            numInPackage={10}
          />
          <ProductBox img={img} title_1="للتنحيف و انقاص الوزن"
            title_2="شاي اخضر سوري مع التوت البري"
            title_3="خلطة طبيعية و مدعمة للتنحيف و انقاص الوزن"
            brandName="a vie" productNum={8} weight="55G" encapsolation="معبأة في كيس نايلون وعلبة كرتون خاصة"
            numInPackage={10}
          />

        </div>
        <div className='d-flex   align-center HJ_gap'>
          <ProductBox img={img} title_1="للتنحيف و انقاص الوزن"
            title_2="شاي اخضر سوري مع التوت البري"
            title_3="خلطة طبيعية و مدعمة للتنحيف و انقاص الوزن"
            brandName="a vie" productNum={8} weight="55G" encapsolation="معبأة في كيس نايلون وعلبة كرتون خاصة"
            numInPackage={10}
          />
          <ProductBox img={img} title_1="للتنحيف و انقاص الوزن"
            title_2="شاي اخضر سوري مع التوت البري"
            title_3="خلطة طبيعية و مدعمة للتنحيف و انقاص الوزن"
            brandName="a vie" productNum={8} weight="55G" encapsolation="معبأة في كيس نايلون وعلبة كرتون خاصة"
            numInPackage={10}
          />
          <ProductBox img={img} title_1="للتنحيف و انقاص الوزن"
            title_2="شاي اخضر سوري مع التوت البري"
            title_3="خلطة طبيعية و مدعمة للتنحيف و انقاص الوزن"
            brandName="a vie" productNum={8} weight="55G" encapsolation="معبأة في كيس نايلون وعلبة كرتون خاصة"
            numInPackage={10}
          />

        </div>
      </div>
    </div>
  )
}

export default Products

