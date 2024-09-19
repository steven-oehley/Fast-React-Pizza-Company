import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './ui/Home';
import Error from './ui/Error';
import Menu, { loader as menuLoader } from './features/Menu/Menu';
import Cart from './features/Cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order.jsx';
import AppLayout from './ui/AppLayout.jsx';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
      },
      {
        path: '/order/:id',
        element: <Order />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
