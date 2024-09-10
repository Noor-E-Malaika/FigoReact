import About from './Components/About/About';
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Cards from './Components/Cards/Cards'
import Menu from './Components/Menu/Menu';
import Figo from './Components/Figo/Figo';
import News from './Components/News/News'
import Subscribe from './Components/Subscribe/Subscribe' 
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Cards/>
      <Menu/>
      <Figo/>
      <News/>
      <Subscribe/>
      <Footer/>
      
    </div>
  );
}

export default App;
