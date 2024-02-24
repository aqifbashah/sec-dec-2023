import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FormA from "./pages/FormA";
import FormB from "./pages/FormB";
import FormC from "./pages/FormC";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FormA />,
    },
    {
      path: "/b",
      element: <FormB />,
    },
    {
      path: "/c",
      element: <FormC />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
