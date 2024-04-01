import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import {createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from 'react-router-dom'
import DashBoard from './components/DashBoard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<DashBoard/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>

    </Route>
  ))
  return (
   
      <>
       <RouterProvider  router={router}/>
      </>
  );
}

export default App;
