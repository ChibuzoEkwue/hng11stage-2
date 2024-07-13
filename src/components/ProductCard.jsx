import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ name, desc, price, image, id }) => {
	
	const { addItem } = useContext(CartContext);
	const addtoCart = () => {
		addItem({
			name,
			id,
			desc,
			price,
			image,
			quantity: 1,
		});
	};
	return (
		<div className="h-[400px]  md:h-[400px] border-[1px] py-2 px-4 border-red-500 flex flex-col items-center justify-between">
			<Link to={`/${id}`}>
				<div className="w-[300px] h-[250px]">
					<img
						src={image}
						alt={name}
						className="object-contain w-full h-full"
					/>
				</div>
			</Link>
			<div className="h-[32px] w-full">
				<div className=" flex items-center justify-between text-[15px] lg:text-[18px]  font-[400]">
					<span className="">{name}</span>
					<span className="">${price}</span>
				</div>
				<p className="text-[13px] lg:text-[14px] font-[300] text-gray-500 w-full line-clamp-2">
					{desc}
				</p>
			</div>
			<button
				onClick={addtoCart}
				className="w-full h-[40px] my-3 flex items-center justify-center bg-pink-100 gap-1 border-[1px] border-red-500"
			>
				<span className="text-[14px] text-[#860920]">ADD TO CART</span>
				<span>
					<ShoppingCart color="#860920" />
				</span>
			</button>
		</div>
	);
};

export default ProductCard;
