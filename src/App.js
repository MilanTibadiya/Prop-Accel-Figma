import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Plan from './components/Plan';
import Review from './components/Review';

function App() {
  return (
    <div className="App w-[1440px] h-[3007px]">
      <Header/>
      <Hero/>
      <About/>
      <Plan/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;
