import { PaginatedResponse, Product } from '@/types/product';

const API_BASE_URL = 'https://dummyjson.com';

interface GetProductsParams {
	skip?: number;
	limit?: number;
	search?: string;
	category?: string;
}

export const ProductAPI = {
	async getProducts(params?: GetProductsParams): Promise<PaginatedResponse<Product>> {
		const { skip = 0, limit = 30, search, category } = params || {};

		let url = new URL(`${API_BASE_URL}/products`);

		if (search) {
			url = new URL(`${API_BASE_URL}/products/search`);
			url.searchParams.append('q', search);
		} else if (category) {
			url = new URL(`${API_BASE_URL}/products/category/${category}`);
		}

		url.searchParams.append('skip', skip.toString());
		url.searchParams.append('limit', limit.toString());

		const response = await fetch(url.toString(), {
			// Next.js aggressive caching, revalidate every hour
			cache: 'force-cache',
			next: { revalidate: 3600 },
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch products: ${response.statusText}`);
		}

		const data = await response.json();

		// If DummyJSON doesn't support combining search + category via API,
		// we manually filter here if both were provided.
		if (search && category) {
			const filteredProducts = (data.products as Product[]).filter(
				(p) => p.category.toLowerCase() === category.toLowerCase()
			);
			return {
				...data,
				products: filteredProducts,
				// Note: Total count will be inaccurate for pagination when manually filtering,
				// but this handles the DummyJSON API limitation.
				total: filteredProducts.length,
			};
		}

		return data;
	},

	async getProductById(id: number | string): Promise<Product> {
		const response = await fetch(`${API_BASE_URL}/products/${id}`, {
			cache: 'force-cache',
			next: { revalidate: 3600 },
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch product ${id}: ${response.statusText}`);
		}

		return response.json();
	},
};
