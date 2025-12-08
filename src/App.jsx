import Header from './components/Header';
import Introduction from './components/Introduction';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

