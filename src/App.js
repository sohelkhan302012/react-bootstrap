// import { BrowserRouter , Route, Routes} from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

function App() {
  return (
    <>
 <Header/>
   {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/about' element={<About/>}></Route>
     
    </Routes>
    </BrowserRouter> */}
   {/* <Footer/> */}
    </>
  );
}

export default App;
