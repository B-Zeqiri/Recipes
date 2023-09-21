import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { MainProvider } from './Context/MainContext';
import LogIn from './Pages/LogIn';
import SignIn from './Pages/SignIn';
import AddRecipes from './Pages/AddRecipes';
import UpdateList from './Pages/UpdateList';

function App() {
  const router = createBrowserRouter([
    {
      path:"/HomePage",
      element: <HomePage/>
    },
    {
      path:"/",
      element: <LogIn/>
    },
    {
      path:"/SignIn",
      element: <SignIn/>
    },
    {
      path:"/AddRecipes",
      element: <AddRecipes/>
    },
    ,
    {
      path:"/UpdateList",
      element: <UpdateList/>
    }
  ])
  return (
    <div className="App">
      <MainProvider>
      <RouterProvider router={router} />
      </MainProvider>
    </div>
  );
}

export default App;
