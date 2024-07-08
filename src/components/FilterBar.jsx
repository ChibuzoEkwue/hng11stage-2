import { Filter, LayoutGrid, Menu } from "lucide-react";

const FilterBar = () => {
	return (
		<div className=" my-7 flex items-center justify-between ">
			{/* MOBILE SCREEN */}

			<div className="flex items-center gap-1 pl-3 lg:hidden ">
				<Menu color="#860920" />
				<span className="text-[#860920] text-[16px] font-[500]">Filter</span>
			</div>

			{/* TABLET SCREEN */}

			<div className="hidden w-full lg:min-w-[810px] lg:flex lg:items-center lg:justify-between">
				<div className="flex items-center justify-center text-[14px] h-[30px]">
					<h3>Clothes &gt; Shoes &gt; Sneakers &gt;</h3>
				</div>
				<div className="flex items-center gap-3">
					<span className="hidden lg:flex lg:items-center lg:gap-3">
						<Filter />
						<span className="text-[16px] font-[500]">
							filter by: <span className="text-[#860920] ">Low to high</span>
						</span>
					</span>
					<span className="p-1 border ">
						<LayoutGrid />
					</span>
					<Menu />
				</div>
			</div>
		</div>
	);
};

export default FilterBar;
