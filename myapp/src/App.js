import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Slider from './Component/Slider';
import About from './Component/About';
import Research from './Component/Research';
import Campaign from './Component/Campaign';
import Agency from './Component/Agency';
import Work from './Component/Work';
import Faq from './Component/Faq';
import Footer from './Component/Footer';

function App() {
  return (
   <>
    <Header/>
    <Slider/>
    <About/>
    <Research/>
    <Campaign/>
    <Agency/>
    <Work/>
    <Faq/>
    <Footer/>
   </>
  );
}

export default App;
