import './App.css';
import Navbar from './Components/navbar/Navbar';
import Containers from './Components/containers/Containers';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div className="content">
        <Containers />
      </div>
        
      
    </div>
  );
}  

export default App;
