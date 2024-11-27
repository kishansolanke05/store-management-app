
import './App.css';
import'../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from './templete/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './product/AddProduct';
import ViewProduct from './product/ViewProduct';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
      <div className='background'>
      <Routes>
             <Route path="/" element={ViewProduct}></Route>
             <Route path="add" element={<AddProduct/>}></Route>
             <Route path="view" element={<ViewProduct/>}></Route>
             <Route path="add/:id" element={<AddProduct/>}></Route>
      </Routes>
             </div>
      
     </BrowserRouter>
    </div>
  );
}

export default App;
