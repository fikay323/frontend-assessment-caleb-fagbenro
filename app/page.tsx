import { ProductAPI } from '@/lib/api/products';
import { ProductCard } from '@/features/products/components/product-card';
import { SearchFilters } from '@/features/products/components/search-filters';

type Props = {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ListingPage({ searchParams }: Props) {
	const params = await searchParams;

	const search = typeof params.search === 'string' ? params.search : undefined;
	const category = typeof params.category === 'string' ? params.category : undefined;
	const page = typeof params.page === 'string' ? parseInt(params.page, 10) : 1;
	const limit = 20;
	const skip = (page - 1) * limit;

	const data = await ProductAPI.getProducts({ skip, limit, search, category });

	return (
		<main className="min-h-screen bg-[#f7f9fb] text-[#2a3439] font-['Inter']">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<header className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
					<div>
						<h1 className="font-['Manrope'] text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
							Explore the Archive
						</h1>
						<p className="mt-2 text-[#566166]">Curated digital artifacts and essentials.</p>
					</div>
					<SearchFilters />
				</header>

				{data.products.length === 0 ? (
					<div className="flex flex-col items-center justify-center py-24 text-center bg-white rounded-2xl shadow-[0_8px_30px_rgb(42,52,57,0.04)]">
						<h3 className="text-xl font-['Manrope'] font-semibold text-[#2a3439]">No artifacts found</h3>
						<p className="mt-2 text-[#566166]">Try adjusting your search or category filters.</p>
					</div>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
						{data.products.map((product, idx) => (
							<ProductCard key={product.id} product={product} priority={idx < 4} />
						))}
					</div>
				)}

			</div>
		</main>
	);
}
