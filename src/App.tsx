import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home/Home";
import { Burger } from "./pages/Burger/Burger";
import { Bus } from "./pages/Bus/Bus";
import { PageOne } from "./pages/Burger/views/PageOne";
import { PageTwo } from "./pages/Burger/views/PageTwo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/burger",
          element: <Burger />,
          children: [
            {
              path: "one",
              element: <PageOne />,
            },
            {
              path: "two",
              element: <PageTwo />,
            },
          ],
        },
        {
          path: "/bus",
          element: <Bus />,
        },
      ],
    },
  ]);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
