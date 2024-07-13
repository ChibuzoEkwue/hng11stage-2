import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
const Checkout = () => {
	const { items, clearCart } = useContext(CartContext);

	const navigate = useNavigate();

	const checkOuthandler = () => {
		clearCart();
		navigate("/purchase");
	};

	const totalPrice = items.reduce((curNumber, item) => {
		const singleItem = item.quantity * item.price;
		return curNumber + singleItem;
	}, 0);
	return (
		<main className="p-2">
			<h4 className="flex text-[16px] my-5 ">
				Card &gt; <span className="text-[#860920]">Shipping details</span> &gt;
				payment
			</h4>

			{/* CUSTOMER INFORMATION */}
			<div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
				<div className="lg:flex lg:flex-col lg:w-[70%] lg:gap-5">
					<div className="border border-gray-300 p-3 w-full">
						<h3 className="mb-4 text-[18px]">Customer Information</h3>
						<div className="flex flex-col gap-3  xl:flex-row w-full xl:flex-wrap">
							<div className="flex flex-col gap-2 xl:w-[45%]">
								<p className="text-[14px]">First Name</p>
								<div className="h-[50px] w-full border border-gray-300  flex items-center text-slate-300">
									<input
										type="text"
										placeholder="john"
										className=" px-2 w-full h-full focus:outline-none text-black"
									/>
								</div>
							</div>
							<div className="flex flex-col gap-2 xl:w-[45%]">
								<p className="text-[14px]">Last Name</p>
								<div className="h-[50px] w-full border border-gray-300  flex items-center text-slate-300">
									<input
										type="text"
										placeholder="john"
										className=" px-2 w-full h-full focus:outline-none text-black"
									/>
								</div>
							</div>
							<div className="flex flex-col gap-2 xl:w-[45%]">
								<p className="text-[14px]">Phone Number</p>
								<div className="h-[50px] w-full border border-gray-300 flex items-center text-slate-300">
									<input
										type="number"
										placeholder="1111115555555"
										className=" px-2 w-full h-full focus:outline-none text-black"
									/>
								</div>
							</div>
							<div className="flex flex-col gap-2 xl:w-[45%]">
								<p className="text-[14px]">Email</p>
								<div className="h-[50px] w-full border border-gray-300  flex items-center text-slate-300">
									<input
										type="email"
										placeholder="john@gmail.com"
										className=" px-2 w-full h-full focus:outline-none text-black"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="border border-gray-300 p-3 w-full">
						<h3 className="mb-4 text-[18px]">Shipping Information</h3>
						<div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap  xl:flex-row w-full xl:flex-wrap">
							<div className="flex flex-col gap-2 lg:w-[100%] xl:w-[55%]">
								<p className="text-[14px]">street Address</p>
								<div className="h-[50px] w-full border border-gray-300  flex items-center text-slate-300">
									<input
										type="text"
										placeholder="new york"
										className=" px-2 w-full h-full focus:outline-none text-black"
									/>
								</div>
							</div>
							<div className="flex flex-col gap-2 lg:w-[45%] xl:w-[40%]">
								<p className="text-[14px]">Town</p>
								<div className="h-[50px] w-full border border-gray-300  flex items-center text-slate-300">
									<input
										type="text"
										placeholder="Lagos"
										className=" px-2 w-full h-full focus:outline-none text-black"
									/>
								</div>
							</div>
							<div className="flex flex-col gap-2 lg:w-[45%] xl:w-[30%]">
								<p className="text-[14px]">Country</p>
								<div className="h-[50px] w-full border border-gray-300  flex items-center text-slate-300">
									<input
										type="text"
										placeholder="Nigeria"
										className=" px-2 w-full h-full focus:outline-none text-black"
									/>
								</div>
							</div>
							<div className="flex flex-col gap-2 lg:w-[45%] xl:w-[30%]">
								<p className="text-[14px]">State</p>
								<div className="h-[50px] w-full border border-gray-300  flex items-center text-slate-300">
									<input
										type="text"
										placeholder="Lagosstate"
										className=" px-2 w-full h-full focus:outline-none text-black"
									/>
								</div>
							</div>
							<div className="flex flex-col gap-2 lg:w-[45%] xl:w-[30%]">
								<p className="text-[14px]">Postal Code</p>
								<div className="h-[50px] w-full border border-gray-300  flex items-center text-slate-300">
									<input
										type="number"
										placeholder="32032"
										className=" px-2 w-full h-full focus:outline-none text-black"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full lg:w-[30%] border border-gray-300 p-4 lg:h-[400px]">
					<h4 className="text-[20px] font-[500]">Order Summary</h4>
					<ul className="flex flex-col gap-3 mt-5 text-gray-500">
						<li className="flex justify-between">
							<span>Items total cost</span>
							<span>NGN {totalPrice}</span>
						</li>
						<li className="flex justify-between">
							<span>Delivery fees</span>
							<span>NGN 40</span>
						</li>
						<li className="flex justify-between">
							<span>Value added tax(VAT)</span>
							<span>NGN 20</span>
						</li>
						<li className="flex justify-between">
							<span>Discount</span>
							<span>NGN 10</span>
						</li>

						<li className="flex justify-between border-t py-8 border-gray-300">
							<span className="text-[20px] font-bold">Total</span>
							<span>NGN {totalPrice + 60 - 10}</span>
						</li>
					</ul>
					
						<button onClick={checkOuthandler} className="w-full h-[50px] mt-3 border bg-[#860920] text-white flex items-center justify-center gap-2 rounded-sm">
							Proceed to payment
						</button>
					
				</div>
			</div>
		</main>
	);
};

export default Checkout;
