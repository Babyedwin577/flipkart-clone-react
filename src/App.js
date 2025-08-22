import  Header  from "./components/header/Header";
import { SliderRender } from "./components/silder/SliderRender";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer/Footer";
import './App.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <SliderRender/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;

