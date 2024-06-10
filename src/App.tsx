
import './App.css'
import Delete_Popup from './componnents/Delete_Popup/Delete_Popup'
import category from './assets/images/MainPage/category.png'
import brandmain from './assets/images/MainPage/brandmain.png'
import Cards from './componnents/Cards/Cards'
import Footer from './componnents/Footer/Footer'
import Cards_withCircleImage from './componnents/Cards/Cards_withCircleImage'

function App() {
  
  return (
    <>
      <h1>Siria Herbs
        <Delete_Popup/>
        <Cards title="Category" num="25" color=" #58b0e0" image={category} />
        <Cards_withCircleImage title="Our Brands" num="25" color=" #A4C241"  image={brandmain}/>
        <Footer/>
      </h1>
    </>
  )
}

export default App
