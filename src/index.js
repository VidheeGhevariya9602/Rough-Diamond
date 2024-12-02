import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'react-toastify/ReactToastify.css';
import Nav from './App';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import Userlist from './components/Userlist';
import './index.css';
import About from './Pages/About';
import Aboutdg from './Pages/Aboutdg';
import Aboutdr from './Pages/Aboutdr';
import Aboutsss from './Pages/Aboutsss';
import Aclogin from './Pages/Aclogin';
import Blog from './Pages/Blog';
import Certification from './Pages/Certification';
import Contect from './Pages/Contect';
import Createac from './Pages/Createac';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Report from './Pages/Report';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

function App() {
  const [formData, setFormData] = useState([]);
  const addFormData = (data) => {
    setFormData([...formData, data]);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />} >
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="About" element={<About />} />
          <Route path="Aboutsss" element={<Aboutsss />} />
          <Route path="Aboutdg" element={<Aboutdg />} />
          <Route path="Aboutdr" element={<Aboutdr />} />
          <Route path="Contect" element={<Contect />} />
          <Route path="product/:id" element={<ProductList />} />
          <Route path="product" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="footer" element={<Footer />} />
          <Route path="Certification" element={<Certification />} />
          <Route path="Report" element={<Report />} />
          <Route path="Profile" element={<Userlist data={formData} />} />
          <Route path="aclogin" element={<Aclogin />} />
          <Route path="ctac" element={<Createac onSubmit={addFormData} />} />
        </Route>
      </Routes>

    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();

