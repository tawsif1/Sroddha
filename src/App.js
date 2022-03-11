import Mission from './components/mission';
import Problem from './components/problem';
import Solution from './components/solution';
import Children from './components/children';
import Footer from './components/footer';
import './App.css';



function App() {
  return (<div className='body'>
    <Mission/>
    <Problem/>
    <Solution/>
    <Children/>
    <Footer/>
   
  </div>
    
  );
}

export default App;
