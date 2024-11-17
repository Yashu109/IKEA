import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import CatogerySection from './Components/CatogerySection/CatogerySection'
import FeaturedProducts from './Components/FeaturedProducts/FeaturedProducts'
import ProductList from './Components/ProductList/ProductList'
import Footer from './Components/Footer/Footer'
import Essentials from './Components/Essentials/Essentials'
import ImageBanners from './Components/ImageBanners/ImageBanners'
import FornitureCatogery from './Components/FurnitureCatogery/FurnitureCatogery'
import Offers from './Components/Offers/Offers'

function App() {
 
 
  return (
    <>
    <div className='App'>
      <Header/>
      <Banner/>
      <CatogerySection />
      {/* <FeaturedProducts /> */}
      <ProductList/>
      <ImageBanners/>
      <Essentials/>
      <Offers/>

      <FornitureCatogery/>
      <Footer/>
    </div>
    </>
  )
}

export default App
