
import Home from './components/Home/Home';
import BookingPage from './components/BookingPage/BookingPage';
import { Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import appStore from './utilles/resdux/appStore';
function App() {
  return (
    <Provider store={appStore}>
          <div className="App">
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/bookingpage' element={<BookingPage/>}></Route>
      </Routes>
    </div>
    </Provider>
  );
}


// const routerApp = createBrowserRouter([
//   {
//     path: '/seatlayout',
//     element: <Seatlayout />
//   }
// ]);

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={routerApp}/>
// );

export default App;






