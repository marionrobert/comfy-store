import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  HomeLayout,
  Landing,
  landingLoader,
  Error,
  Products,
  productsLoader,
  SingleProduct,
  singleProductLoader,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  checkoutLoader,
  Orders,
  ordersLoader
} from './pages';

import { ErrorElement } from '@/components';

// / actions
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as checkoutAction } from './components/CheckoutForm';
import { store } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,

    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: 'products',
        element: <Products />,
        loader: productsLoader,
        errorElement: <ErrorElement />
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: singleProductLoader,
        errorElement: <ErrorElement />
      },
      {
        path: 'cart',
        element: <Cart />,
        errorElement: <ErrorElement />
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorElement />
      },
      {
        path: 'checkout',
        element: <Checkout />,
        errorElement: <ErrorElement />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      {
        path: 'orders',
        element: <Orders />,
        errorElement: <ErrorElement />,
        loader: ordersLoader(store),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);


function App() {
  return <RouterProvider router={router} />;
}
export default App;
