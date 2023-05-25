import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import createStore from './store/store';
import Header from './Components/Header/Header';
import Categories from './Components/Categories/Categories';
import ShoppingCart from './Components/ShoppingCart /ShoppingCart ';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (

    <Provider store={createStore()}>
      <div className="App">
        <Header />

          {/* <Route exact path="/" component={Home} /> */}
          <Routes>
          <Route path="/" element={
            <>
            <Categories />
            <Products />
            </>
          } />
          <Route path="/cart" element={<ShoppingCart/>} />
          </Routes>

        <Footer />
      </div>
    </Provider>

  );
}

export default App;
