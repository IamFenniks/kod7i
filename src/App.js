import './App.css';
import Header from './UI/components/static-comp/Header/Header';
import Nav from './UI/components/static-comp/Nav/Nav';
import Main from './UI/components/content-comp/Main';
import Footer from './UI/components/static-comp/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
