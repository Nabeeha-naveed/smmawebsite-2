import './App.css';
import Contact from './components/contact/Contact';
import Main from './components/content/Main';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="App">
      <Hero />
      <Main />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
