import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductCardProps {
	product: Product;
	priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
	return (
		<Link href={`/product/${product.id}`} className="group block">
			<article className="bg-[#ffffff] rounded-xl p-6 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(86,84,168,0.08)] h-full flex flex-col">
				<div className="relative aspect-square mb-6 overflow-hidden rounded-lg bg-[#f0f4f7]">
					<Image
						src={product.thumbnail}
						alt={product.title}
						fill
						className="object-cover transition-transform duration-500 group-hover:scale-105"
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
						priority={priority}
					/>
				</div>

				<div className="flex flex-col flex-grow">
					<span className="text-xs font-semibold text-[#5654a8] tracking-wider uppercase mb-2">
						{product.category.replace('-', ' ')}
					</span>
					<h3 className="text-base font-medium text-[#2a3439] mb-4 font-['Inter'] line-clamp-2">
						{product.title}
					</h3>
					<div className="mt-auto flex items-center justify-between">
						<span className="text-lg font-bold text-[#5654a8]">
							${product.price.toFixed(2)}
						</span>
						<span className="text-sm font-semibold px-2 py-1 bg-[#f0f4f7] text-[#566166] rounded">
							★ {product.rating}
						</span>
					</div>
				</div>
			</article>
		</Link>
	);
}
