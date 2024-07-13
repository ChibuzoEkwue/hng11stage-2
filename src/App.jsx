import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import DetailPage from "./Pages/DetailPage";
import CartProvider from "./context/CartContextProvider";
import Purchase from "./Pages/Purchase";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "/:id",
					element: <DetailPage />,
				},
				{
					path: "/cart",
					element: <Cart />,
				},
				{
					path: "/checkout",
					element: <Checkout />,
				},
				{
					path: "/purchase",
					element: <Purchase />,
				},
			],
		},
	]);
	return (
		<>
			<CartProvider>
				<RouterProvider router={router} />
			</CartProvider>
		</>
	);
}

export default App;
