import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Main from './layout/Main';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';
import Team from './components/Team/Team';
import MemberDetails from './components/MemberDetails/MemberDetails';


function App() {
  const router = createBrowserRouter([
    // { path: '/', element: <Home /> },
    // { path: '/home', element: <Home /> },
    // { path: '/about', element: <About /> },
    // { path: '/blog', element: <Blog /> },

    {
      path: '/',
      element: <Main />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/blog', element: <Blog /> },
        {
          path: '/team',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Team />
        },
        {
          path: '/member/:memberId',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.memberId}`)
          },
          element: <MemberDetails />
        }
      ]
    },
    { path: '/contact', element: <Contact /> },
    { path: '*', element: <Error /> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
