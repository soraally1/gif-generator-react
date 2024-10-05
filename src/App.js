import './App.css';
import Footer from './footer'
import Header from './header'
import Random from './random';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main-div'>
        <Random/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
