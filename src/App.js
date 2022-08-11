//import logo from './logo.svg';
import './App.css';
import Article from './components/Article';

function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <Article/>
      </div>
    </div>
  )
 
}

export default App;
