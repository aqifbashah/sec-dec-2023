import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Example from "./pages/Example";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/example",
    element: <Example />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
