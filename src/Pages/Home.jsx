import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState({});
	const [page, setPage] = useState(1);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const { data } = await axios.get(
					`/api/products?organization_id=${
						import.meta.env.VITE_ORGANIZATION_ID
					}&reverse_sort=false&page=${page}&size=10&Appid=${
						import.meta.env.VITE_API_ID
					}&Apikey=${import.meta.env.VITE_API_KEY}`
				);
				setData(data);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				console.log(error);
			}
		};
		getProducts();
	}, [page]);

	const nextPage = () => {
		setPage((prev) => prev + 1);
	};
	const prevPage = () => {
		setPage((prev) => prev - 1);
	};

	return (
		<main className=" ">
			<FilterBar />
			{/* <div className="w-[403px] gap-2 px-2 mx-auto grid grid-cols-2  lg:w-[100%] lg:grid-cols-3 lg:max-w-screen-lg xl:grid-cols-4  ">
				{ITEMS.map((item) => (
					<ProductCard key={item.id} {...item} />
				))}
			</div> */}
			{isLoading ? (
				<p>Loading</p>
			) : (
				<div className=" grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4  md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] ">
					{data?.items?.map((item) => (
						<ProductCard
							key={item.id}
							id={item.id}
							name={item.name}
							desc={item.description}
							price={30}
							image={`https://api.timbu.cloud/images/${item.photos[0].url}`}
						/>
					))}
				</div>
			)}
			<div className="w-full flex items-center justify-between mt-10 text-white ">
				<button
					className="px-4 py-2 border bg-red-800 rounded-md disabled:bg-red-600 disabled:cursor-not-allowed"
					disabled={!data.previous_page}
					onClick={prevPage}
				>
					Prev
				</button>
				<button
					className="px-4 py-2 border bg-red-800 rounded-md disabled:bg-red-600 disabled:cursor-not-allowed"
					disabled={!data.next_page}
					onClick={nextPage}
				>
					Next
				</button>
			</div>
		</main>
	);
};

export default Home;
