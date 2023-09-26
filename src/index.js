
import ReactDOM from 'react-dom/client';
import {RouterProvider,CreateBrowserRouter, createBrowserRouter} from 'react-router-dom';
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Contact from './Views/Contact/Contact';
//import UserCard,{UserCardBio,UserCardCityBio} from './UserCard';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/About',
    element: <About/>
  },
  {
    path: '/Contact',
    element: <Contact/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
/*
function App(){
  const path = window.location.pathname;

  if(path === "/"){
    return <Home/>
  }
  else if(path === "/About"){
    return <About/>
  }
  else if(path === "/Contact"){
    return <Contact/>
  }
  else{
    return <h1>404 Error ! Page is not found</h1>
  }
}
root.render(
  <>
    <App/>
    </>
);
//manually implemented react routing
*/

//we use react -router dom library for routing
root.render(
  <>
    <RouterProvider router={router}/>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
