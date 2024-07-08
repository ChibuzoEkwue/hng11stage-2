import { ITEMS } from "../../data";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";

const Home = () => {
	return (
		<main className="container mx-auto ">
			<FilterBar />
			<div className="w-[80%] gap-2 px-2 mx-auto grid grid-cols-2  lg:w-[100%] lg:grid-cols-3 lg:max-w-screen-lg xl:grid-cols-4  ">
				{ITEMS.map((item) => (
					<ProductCard key={item.id} {...item} />
				))}
			</div>
		</main>
	);
};

export default Home;
