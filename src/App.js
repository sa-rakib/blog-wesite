import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Home from './containers/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Home />
    </div>
  );
}

export default App;
