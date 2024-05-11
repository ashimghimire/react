import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import List from './components/List';
import Add from './components/Add';
import Update from './components/Update';
import TodoWrapperContainter from './Container/TodoWrapperContainter';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><List/>
                </>,
    },
    {
        path: "/add",
        element: <Add/>,
      },
      {
        path: "/update/:id",
        element: <Update/>,
      },
    
  ]);
const Home = () => {

    return (
        <div className="App">
          <TodoWrapperContainter>
          <RouterProvider router={router}></RouterProvider>
          </TodoWrapperContainter>
          <ToastContainer />
    </div>
    );
};

export default Home;