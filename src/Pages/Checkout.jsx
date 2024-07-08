const Checkout = () => {
	return (
		<main className="p-2">
			<h4 className="flex text-[16px] my-5 ">
				Card &gt; <span className="text-[#860920]">Shipping details</span>{" "}
				&gt; payment
			</h4>

			{/* CUSTOMER INFORMATION */}
			<div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
				<div className="lg:flex lg:flex-col lg:w-[70%] lg:gap-5">
					<div className="border border-gray-300 p-3 w-full">
						<h3 className="mb-4 text-[18px]">Customer Information</h3>
						<div className="flex flex-col gap-3  xl:flex-row w-full xl:flex-wrap">
							<div className="flex flex-col gap-2 xl:w-[45%]">
								<p className="text-[14px]">First Name</p>
								<div className="h-[50px] w-full border border-gray-300 px-2 flex items-center text-slate-300">
									John
								</div>
							</div>
							<div className="flex flex-col gap-2 xl:w-[45%]">
								<p className="text-[14px]">Last Name</p>
								<div className="h-[50px] w-full border border-gray-300 px-2 flex items-center text-slate-300">
									John
								</div>
							</div>
							<div className="flex flex-col gap-2 xl:w-[45%]">
								<p className="text-[14px]">Phone Number</p>
								<div className="h-[50px] w-full border border-gray-300 px-2 flex items-center text-slate-300">
									+234 555 55 55 55{" "}
								</div>
							</div>
							<div className="flex flex-col gap-2 xl:w-[45%]">
								<p className="text-[14px]">Email</p>
								<div className="h-[50px] w-full border border-gray-300 px-2 flex items-center text-slate-300">
									John@email.com
								</div>
							</div>
						</div>
					</div>
					<div className="border border-gray-300 p-3 w-full">
						<h3 className="mb-4 text-[18px]">Shipping Information</h3>
						<div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap  xl:flex-row w-full xl:flex-wrap">
							<div className="flex flex-col gap-2 lg:w-[100%] xl:w-[55%]">
								<p className="text-[14px]">street Address</p>
								<div className="h-[50px] w-full border border-gray-300 px-2 flex items-center text-slate-300">
									John
								</div>
							</div>
							<div className="flex flex-col gap-2 lg:w-[45%] xl:w-[40%]">
								<p className="text-[14px]">Town</p>
								<div className="h-[50px] w-full border border-gray-300 px-2 flex items-center text-slate-300">
									John
								</div>
							</div>
							<div className="flex flex-col gap-2 lg:w-[45%] xl:w-[30%]">
								<p className="text-[14px]">Country</p>
								<div className="h-[50px] w-full border border-gray-300 px-2 flex items-center text-slate-300">
									+234 555 55 55 55{" "}
								</div>
							</div>
							<div className="flex flex-col gap-2 lg:w-[45%] xl:w-[30%]">
								<p className="text-[14px]">State</p>
								<div className="h-[50px] w-full border border-gray-300 px-2 flex items-center text-slate-300">
									John@email.com
								</div>
							</div>
							<div className="flex flex-col gap-2 lg:w-[45%] xl:w-[30%]">
								<p className="text-[14px]">Postal Code</p>
								<div className="h-[50px] w-full border border-gray-300 px-2 flex items-center text-slate-300">
									John@email.com
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
							<span>$150</span>
						</li>
						<li className="flex justify-between">
							<span>Delivery fees</span>
							<span>$40</span>
						</li>
						<li className="flex justify-between">
							<span>Value added tax(VAT)</span>
							<span>$20</span>
						</li>
						<li className="flex justify-between">
							<span>Discount</span>
							<span>$10</span>
						</li>

						<li className="flex justify-between border-t py-8 border-gray-300">
							<span className="text-[20px] font-bold">Total</span>
							<span>$200</span>
						</li>
					</ul>

					<button className="w-full h-[50px] mt-3 border bg-[#860920] text-white flex items-center justify-center gap-2 rounded-sm">
						Proceed to payment
					</button>
				</div>
			</div>
		</main>
	);
};

export default Checkout;
