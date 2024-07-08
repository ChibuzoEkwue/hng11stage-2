import { ShoppingCart } from "lucide-react";

const ProductCard = ({ name, desc, price, image }) => {
	return (
		<div className="h-[339px] w-[185px] lg:h-[490px] lg:w-[242px] border-[1px] p-2 border-red-500 flex flex-col items-center justify-between">
			<div className="min-h-[200px] w-full lg:h-[297px]">
				<img src={image} alt={name} className="object-contain w-full h-full" />
			</div>
			<div className="w-[170px] min-h-[32]">
				<div className=" flex items-center justify-between">
					<span className="text-[14px] lg:text-[18px]  font-[400]">{name}</span>
					<span className="text-[14px] lg:text-[18px]  font-[400]">
						${price}
					</span>
				</div>
				<p className="text-[12px] lg:text-[14px] font-[300] text-[#A6A7A9] w-full line-clamp-2">
					{desc}
				</p>
			</div>
			<button className="w-[85%] h-[40px] my-3 flex items-center justify-center bg-pink-100 gap-1 border-[1px] border-red-500">
				<span className="text-[14px] text-[#860920]">ADD TO CART</span>
				<span>
					<ShoppingCart color="#860920" />
				</span>
			</button>
		</div>
	);
};

export default ProductCard;
