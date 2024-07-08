const Footer = () => {
	return (
		<footer className="w-full max-h-max bg-black text-white py-5">
			<div className="flex flex-col gap-10 p-5 lg:container lg:mx-auto lg:flex-row">
				<div className="flex flex-col gap-4 lg:flex-1">
					<img src="/logo.png" className="w-[70px] h-[60px]" />
					<p className="text-justify text-[#AEAFB0]">
						Timbu Cloud Shop offers a curated selection of high-quality products
						at unbeatable prices. Find everything you need in one place. Shop
						now!
					</p>
				</div>
				<div className="flex flex-col gap-10 lg:flex-3">
					<h3 className="text-[18px]">Contact Us</h3>
					<ul className="flex flex-col gap-5">
						<li className="text-justify text-[#AEAFB0]">
							Phone: +234 123 456 7890
						</li>
						<li className="text-justify text-[#AEAFB0]">
							Email: timbushop@example.com
						</li>
					</ul>
				</div>
				<div className="flex flex-col gap-10">
					<h3 className="text-[18px]">Help</h3>
					<ul className="flex flex-col gap-5">
						<li className="text-justify text-[#AEAFB0]">FAQ</li>
						<li className="text-justify text-[#AEAFB0]">How to shop on blog</li>
						<li className="text-justify text-[#AEAFB0]">Delivery & returns</li>
						<li className="text-justify text-[#AEAFB0]">Track your order</li>
						<li className="text-justify text-[#AEAFB0]">Bulk purchase</li>
					</ul>
				</div>
				<div className="flex flex-col gap-10">
					<h3 className="text-[18px]">More service</h3>
					<ul className="flex flex-col gap-5">
						<li className="text-justify text-[#AEAFB0]">Gift cards</li>
						<li className="text-justify text-[#AEAFB0]">coupons</li>
						<li className="text-justify text-[#AEAFB0]">Track your order</li>
						<li className="text-justify text-[#AEAFB0]">Discount</li>
					</ul>
				</div>
			</div>
			<p className="flex flex-row items-center justify-center gap-4 text-[9px] lg:text-[14px]">
				<span>2024 Tinibu Cloud Shop. All right reserved</span>
				<span>Terms of use</span>
				<span>Privacy</span>
			</p>
		</footer>
	);
};

export default Footer;
