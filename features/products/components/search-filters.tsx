'use client';

import { useUrlFilters } from '../hooks/use-url-filters';

const CATEGORIES = [
	'beauty',
	'fragrances',
	'furniture',
	'groceries',
	'home-decoration',
	'kitchen-accessories',
	'laptops',
	'mens-shirts',
	'mens-shoes',
	'mens-watches',
	'mobile-accessories',
	'motorcycle',
	'skin-care',
	'smartphones',
	'sports-accessories',
	'sunglasses',
	'tablets',
	'tops',
	'vehicle',
	'womens-bags',
	'womens-dresses',
	'womens-jewellery',
	'womens-shoes',
	'womens-watches'
];

export function SearchFilters() {
	const { search, setSearch, category, handleCategoryChange } = useUrlFilters();

	return (
		<div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
			<input
				type="search"
				placeholder="Search artifacts..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="px-4 py-2 bg-[#f0f4f7] rounded-lg border-2 border-transparent focus:border-[#5654a8]/30 focus:bg-white outline-none w-full sm:w-64 transition-all"
			/>

			<select
				value={category}
				onChange={(e) => handleCategoryChange(e.target.value)}
				className="px-4 py-2 bg-[#f0f4f7] text-[#2a3439] rounded-lg border-2 border-transparent focus:border-[#5654a8]/30 focus:bg-white outline-none capitalize transition-all"
			>
				<option value="">All Categories</option>
				{CATEGORIES.map(cat => (
					<option key={cat} value={cat}>
						{cat.replace('-', ' ')}
					</option>
				))}
			</select>
		</div>
	);
}
