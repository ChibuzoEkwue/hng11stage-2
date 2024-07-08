const Subscription = () => {
	return (
		<div className="mt-5 h-[150px] w-full bg-[#363636] lg:h-[96px]">
			<div className="container mx-auto flex flex-col items-center justify-center h-full w-full lg:flex-row">
				<div className="flex flex-col items-center justify-center h-full w-full lg:flex-row">
					<h3 className="w-[232px] lg:w-[278px] text-white text-center lg:text-[16px] lg:text-left lg:flex-1 ">
						Get latest deals and newsletters directly to your inbox
					</h3>
					<div className="flex h-[50px] w-[90%] lg:w-[60%] border border-[#860920] lg:flex-3">
						<input
							placeholder="johndoe@example.com"
							className="h-full w-[70%] pl-5"
						/>
						<button className="bg-[#860920] flex items-center justify-center gap-1 h-full w-[30%] text-white">
							Subscripe
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Subscription;
