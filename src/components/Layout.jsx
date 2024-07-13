import { Outlet } from "react-router-dom";
import Header from "./Header";
import Subscription from "./Subscription";
import Footer from "./Footer";

const Layout = () => {
	return (
		<>
			<Header />
			<div className="px-3 container mx-auto ">
				<Outlet />
			</div>
			<Subscription />
			<Footer />
		</>
	);
};

export default Layout;
