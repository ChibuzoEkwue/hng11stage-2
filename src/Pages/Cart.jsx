import { BadgeDollarSign, ChevronDown, Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CircleX } from "lucide-react";

const Cart = () => {
	const { items, removeItem, clearCart } = useContext(CartContext);

	const totalPrice = items.reduce((curNumber, item) => {
		const singleItem = item.quantity * item.price;
		return curNumber + singleItem;
	}, 0);

	const removeCartItem = (id) => {
		removeItem(id);
	};

	const clearCartHandler = () => {
		clearCart();
	};

	if (items.length === 0) {
		return (
			<div className="w-full h-[500px] flex flex-col items-center justify-center">
				<img src="/empty.svg" className="size-[300px]" />
				<p>You have no cart item</p>
			</div>
		);
	}
	return (
		<main className="px-5 mt-7 flex flex-col overflow-x-hidden ">
			{/* MOBILE CART */}
			<div className="lg:hidden">
				<div className=" flex flex-col justify-between border border-gray-300 p-4 h-[120px]">
					<h4 className="flex gap-1">
						<span>Cart Summary</span>
						<ChevronDown />
					</h4>
					<div className="flex align-center justify-between">
						<h3 className="font-bold">Total</h3>
						<span>$150</span>
					</div>
				</div>

				<h4 className="my-6 lg:hidden">Items(2)</h4>

				<div className="flex flex-col gap-4">
					{items.map((item) => (
						<div
							key={item.id}
							className="h-[350px] w-full border border-gray-300 py-4 px-2 flex flex-col justify-between"
						>
							<div className="flex items-center gap-4 h-[150px]">
								<img src={item.image} alt="" className=" h-[150px] w-[150px]" />
								<div className="self-start flex flex-col gap-3">
									<h3 className="flex items-center gap-10">
										<span className="font-[400]">{item.name}</span>
										<span className="font-[400]">${item.price}</span>
									</h3>

									<p className="font-[400]">Quanity: 2</p>
									<p className="font-[400]">Colour: Brown</p>
									<p className="font-[400]">Size: XXl</p>
								</div>
							</div>
							<p>
								<span className="font-bold">Description:</span>{" "}
								<span>{item.desc}</span>
							</p>
							<div className="flex flex-col gap-2">
								<button className="w-full h-[50px] border border-[#860920] text-[#860920] flex items-center justify-center gap-2 rounded-sm">
									<Heart /> <span>Add to favourite</span>
								</button>
								<button
									onClick={() => removeCartItem(item.id)}
									className="w-full h-[50px] border border-[#860920] text-[#860920] flex items-center justify-center gap-2 rounded-sm"
								>
									<ShoppingBag /> <span>Remove from cart</span>
								</button>
							</div>
						</div>
					))}
				</div>
				<Link to="/checkout" className="bg-inherit">
					<button className="w-full h-[50px] mt-3 border bg-[#860920] text-white flex items-center justify-center gap-2 rounded-sm">
						Checkout
					</button>
				</Link>
			</div>
			{/* TABLET CART */}

			<h4 className=" hidden lg:flex text-lg my-5">
				<span className="text-[#860920]">Cart</span> &gt; Shipping details &gt;
				payment
			</h4>

			<div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-4 ">
				{/* CART */}
				<div className="w-[70%] border border-gray-300 p-5  flex flex-col gap-5">
					<button
						onClick={clearCartHandler}
						className="w-[100px]  mt-3 border bg-transparent text-white flex items-center justify-center gap-2 rounded-sm"
					>
						<CircleX color="#860920" />
						<p className="text-[#860920]">Clear</p>
					</button>
					{items.map((item) => (
						<div
							key={item.id}
							className="border border-gray-300 flex gap-4 h-[227px] "
						>
							<img
								src={item.image}
								alt={item.name}
								className="w-[180px] h-full"
							/>
							<div className="w-full flex flex-col justify-between p-3">
								<h3 className="flex items-center gap-10 justify-between text-[20px]">
									<span className="font-[400] ">{item.name}</span>
									<span className="font-[400]">NGN {item.price}</span>
								</h3>
								<p className="">
									<span className="font-bold">Description: </span>
									{item.desc}
								</p>

								<p className="font-[400]">Quanity: {item.quantity}</p>
								<div className="flex gap-6">
									<p className="font-[400]">Colour: Brown</p>
									<p className="font-[400]">Size: XXl</p>
								</div>
								<div className="flex flex-row gap-2">
									<button className="w-full h-[50px] border border-[#860920] text-[#860920] flex items-center justify-center gap-2 rounded-sm">
										<Heart /> <span>Favourite</span>
									</button>
									<button
										onClick={() => removeCartItem(item.id)}
										className="w-full h-[50px] border border-[#860920] text-[#860920] flex items-center justify-center gap-2 rounded-sm"
									>
										<ShoppingBag /> <span>Remove</span>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
				{/* DETAILS */}
				<div className="w-[30%] border border-gray-300 p-5">
					<h4 className="text-[20px] font-[500]">Cart Summary</h4>
					<ul className="flex flex-col gap-3 mt-5 text-gray-500">
						{items.map((item) => (
							<li key={item.id} className="flex justify-between">
								<span>
									x{item.quantity} {item.name}
								</span>
								<span>NGN {item.price * item.quantity}</span>
							</li>
						))}

						<li className="flex items-center justify-between h-[70px] border-y border-gray-300 ">
							<span className="">Discount</span>
							<span className="">NGR 10</span>
						</li>
						<li className="flex justify-between">
							<span className="text-[20px] font-bold">Total</span>
							<span>NGR {totalPrice - 10}</span>
						</li>
					</ul>
					<div className="w-full h-[70px] flex items-center justify-between">
						<BadgeDollarSign color="#860920" />
						<input
							placeholder="Add discount code here"
							className="w-[80%]"
							readOnly
						/>
					</div>
					<Link to="/checkout" className="bg-inherit">
						<button className="w-full h-[50px] mt-3 border bg-[#860920] text-white flex items-center justify-center gap-2 rounded-sm">
							Checkout
						</button>
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Cart;
