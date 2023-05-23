import './App.css';
import { Provider } from 'react-redux';
import createStore from './store/store';
import Header from './Components/Header/Header';
import Categories from './Components/Categories/Categories';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

      <Provider store={createStore()}>
        <div className="App">
          <Header />
          <Categories />
          <Products />
          <Footer />
        </div>
      </Provider>
  );
}

export default App;
