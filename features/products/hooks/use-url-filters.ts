import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from './use-debounce';

export function useUrlFilters() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();

	const [search, setSearch] = useState(searchParams?.get('search') || '');
	const debouncedSearch = useDebounce(search, 300);

	const updateFilters = useCallback(
		(key: string, value: string) => {
			const params = new URLSearchParams(searchParams?.toString() || '');
			if (value.trim()) {
				params.set(key, value.trim());
			} else {
				params.delete(key);
			}
			params.delete('page'); // resetting to first page when filtering
			router.push(`${pathname}?${params.toString()}`);
		},
		[router, searchParams, pathname]
	);

	useEffect(() => {
		const currentSearch = searchParams?.get('search') || '';
		if (debouncedSearch !== currentSearch) {
			updateFilters('search', debouncedSearch);
		}
	}, [debouncedSearch, searchParams, updateFilters]);

	const handleCategoryChange = (val: string) => {
		updateFilters('category', val);
	};

	return {
		search,
		setSearch,
		category: searchParams?.get('category') || '',
		handleCategoryChange,
	};
}
