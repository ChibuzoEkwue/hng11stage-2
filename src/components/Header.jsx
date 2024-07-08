import { Search, ShoppingCart, Menu, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
	
	return (
		<header className="h-[72px] w-screen  bg-[#F8F8F8] border-b-[#860920] border-b-[1px]">
			<nav className="px-5 lg:px-0 h-full w-full flex items-center justify-between lg:container lg:mx-auto">
				<div className="flex items-center gap-4">
					<img
						src="/logo.png"
						alt="Logo"
						className="lg:w-[70px] lg:h-[60px]"
					/>
				</div>
				<div className="hidden lg:flex lg:h-[50px] lg:w-[450px] border border-[#860920]">
					<input
						placeholder="Search for Clothes, bags"
						className="h-full w-[80%] pl-5"
					/>
					<button className="bg-[#860920] flex items-center justify-center gap-1 h-full w-[20%] text-white">
						<Search />
						<span>Search</span>
					</button>
				</div>
				<div className="flex items-center gap-4">
					<div className="lg:hidden">
						<Search />
					</div>
					<div className="hidden lg:flex items-center gap-2 ">
						<UserRound size={30} />
						<div className="flex flex-col gap-1">
							<h3 className="text-[12px] font-[300]">Hello</h3>
							<h4 className="text-[14px] font-[400] text-[#860920]">Oshoke</h4>
						</div>
					</div>
					<div className="lg:flex lg:items-center lg:gap-4">
						<div className="relative">
							<Link to="/cart" className="bg-inherit">
								<ShoppingCart />
								<div className="absolute top-[-17px] right-[-10px] bg-[#860920] rounded-full size-7 flex items-center justify-center text-white">
									2
								</div>
							</Link>
						</div>
						<Link to="/cart" className="bg-inherit">
							<h3 className="hidden lg:block lg:text-[16px]">Cart</h3>
						</Link>
					</div>
					<div className="lg:hidden">
						<Menu />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
