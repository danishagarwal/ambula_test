import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { element } from "prop-types";
import About from "./components/About";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Todo from "./components/Todo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },

  {
    path: "/todo",
    element: <Todo />,
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
