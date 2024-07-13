import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../context/CartContext";

const DetailPage = () => {
	const { id } = useParams();
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [imageIndex, setImageIndex] = useState(0);

	const { addItem } = useContext(CartContext);

	const addtoCart = () => {
		addItem({
			name: data.name,
			id: data.id,
			desc: data.description,
			price: data.current_price,
			image: `https://api.timbu.cloud/images/${data.photos[0].url}`,
			quantity: 1,
		});
	};

	useEffect(() => {
		const getProducts = async () => {
			try {
				const { data } = await axios.get(
					`/api/products/${id}?organization_id=${
						import.meta.env.VITE_ORGANIZATION_ID
					}&Appid=${import.meta.env.VITE_API_ID}&Apikey=${
						import.meta.env.VITE_API_KEY
					}`
				);
				setData(data);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				console.log(error);
			}
		};
		getProducts();
	}, [id]);

	const setImage = (index) => {
		setImageIndex(index);
	};

	return (
		<>
			{isLoading && <p>Loading</p>}
			{!isLoading && (
				<div className="w-full max-h-max flex flex-col items-center justify-between mt-4 md:flex-row">
					<div className="flex-1 p-2">
						<img
							src={`https://api.timbu.cloud/images/${data.photos[imageIndex].url}`}
							alt=""
							className="size-[400px] mx-auto"
						/>
						<div className="mt-10 flex flex-wrap gap-[15px] justify-center">
							{data.photos.map((photo, index) => (
								<img
									key={index}
									src={`https://api.timbu.cloud/images/${photo.url}`}
									alt=""
									className="size-[100px] "
									onClick={() => setImage(index)}
								/>
							))}
						</div>
					</div>
					<div className="flex-1 flex flex-col gap-4 items-start h-[500px] w-full px-4">
						<h1 className="text-[28px]">Name: {data.name}</h1>
						<h3>Description: {data.description}</h3>
						<p>Price: NGN {data.current_price}</p>
						<p>Available Quantity: {data.available_quantity} pcs</p>
						<button
							onClick={addtoCart}
							className="w-[50%] h-[40px] my-3 flex items-center justify-center bg-pink-100 gap-1 border-[1px] border-red-500"
						>
							<span className="text-[14px] text-[#860920]">ADD TO CART</span>
							<span>
								<ShoppingCart color="#860920" />
							</span>
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default DetailPage;
