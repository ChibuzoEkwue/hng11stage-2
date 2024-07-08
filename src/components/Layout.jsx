import { Outlet } from "react-router-dom";
import Header from "./Header";
import Subscription from "./Subscription";
import Footer from "./Footer";

const Layout = () => {
	return (
		<>
			<Header />
			<div className="container mx-auto ">
				<Outlet />
			</div>
			<Subscription />
			<Footer />
		</>
	);
};

export default Layout;
