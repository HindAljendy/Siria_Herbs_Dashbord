import './App.css'
import Navbar from './componnents/Navbar/Navbar'
import ProductBox from './componnents/ProductBox/ProductBox'
import img from './assets/images/Product/product_01.png'

function App() {

  return (
    <>
    {/* neven Section : */}
      <Navbar />
      <ProductBox img={img} title_1="للتنحيف و انقاص الوزن"
        title_2="شاي اخضر سوري مع التوت البري" 
        title_3="خلطة طبيعية و مدعمة للتنحيف و انقاص الوزن" 
        brandName="a vie" productNum={8} weight="55G" encapsolation="معبأة في كيس نايلون وعلبة كرتون خاصة" 
        numInPackage={10} 
      />
      
    </>
  )
}

export default App
