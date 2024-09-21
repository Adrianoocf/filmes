import './App.css';
import RoutesApp from './routes'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
// tmdb usuario AdrianoOCF senha : nome
// https://www.udemy.com/course/curso-reactjs/learn/lecture/32057322#questions

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={1000}/>
      <RoutesApp/>
    </div>
  );
}

export default App;
