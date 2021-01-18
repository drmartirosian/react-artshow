import './App.css';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ImgGallery from './components/ImgGallery'
import Banner from './components/Banner'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Banner/>
      <ImgGallery/>
      <Footer/>
    </div>
  );
}

export default App;