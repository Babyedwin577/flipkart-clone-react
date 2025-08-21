import  Header  from "./components/header/Header";
import { SliderRender } from "./components/silder/SliderRender";
// import { Products } from "./components/products/Products";
// import { Sales } from "./components/Sales/Sales";
// import { FreedomSale } from "./components/Freedoms-sale/FreedomSale";
// import { Main } from "./components/Main/Main";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer/Footer";
import './App.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <SliderRender/>
      {/* <Products/>
      <Sales/>
      <FreedomSale/> */}
      {/* <Main/> */}
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;


