import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';

import DashBoard from './Components/DashBoard/DashBoard';
import Home from './Components/Home/Home';
import BookDetail from './Components/BookDetail/BookDetail';
import ListedBooks from './Components/ListedBooks/ListedBooks';

import { ToastContainer } from 'react-toastify';
import PageNeedToFuture from './Components/pageNeedToFuture/pageNeedToFuture';
import Login from './Components/Login/Login';
import SignIn from './Components/SignIn/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books/:bookId',
        element: <BookDetail></BookDetail>,
        loader: () => fetch('/booksData.json') // do not load all  the books for one book.
      },
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>
      },
      {
        path: 'listedBooks',
        element: <ListedBooks></ListedBooks>,
        // worst way to load some data
        loader: () => fetch('/booksData.json') // do not load all  the books for one book.
      },
      {
        path: 'pagesToRead',
        element: <PageNeedToFuture></PageNeedToFuture>
      },
      {
        path: 'logIn',
        element: <Login></Login>
      },
      {
        path: 'SignIn',
        element: <SignIn></SignIn>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />

  </StrictMode>,
)



