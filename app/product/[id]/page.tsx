import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProductAPI } from '@/lib/api/products';

type Props = {
	params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params;
	try {
		const product = await ProductAPI.getProductById(id);
		return {
			title: `${product.title} | The Ethereal Archive`,
			description: product.description,
			openGraph: {
				images: [product.thumbnail],
			},
		};
	} catch {
		return {
			title: 'Artifact Not Found | The Ethereal Archive',
		};
	}
}

export default async function ProductDetailPage({ params }: Props) {
	const { id } = await params;

	let product;
	try {
		product = await ProductAPI.getProductById(id);
	} catch {
		notFound();
	}

	return (
		<main className="min-h-screen bg-[#f7f9fb] text-[#2a3439] font-['Inter']">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<nav className="mb-8">
					<Link
						href="/"
						className="text-sm font-medium text-[#566166] hover:text-[#2a3439] transition-colors flex items-center gap-2"
					>
						← Back to Archive
					</Link>
				</nav>

				<div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(42,52,57,0.04)] overflow-hidden">
					<div className="flex flex-col lg:flex-row">
						{/* Left Column: Image/Gallery */}
						<div className="w-full lg:w-1/2 p-8 lg:p-12 bg-[#f0f4f7] flex items-center justify-center">
							<div className="relative w-full aspect-square max-w-xl mx-auto rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(86,84,168,0.08)]">
								<Image
									src={product.thumbnail}
									alt={product.title}
									fill
									className="object-cover"
									priority
									sizes="(max-width: 1024px) 100vw, 50vw"
								/>
							</div>
						</div>

						{/* Right Column: Details */}
						<div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
							<span className="text-sm font-semibold tracking-wider text-[#5654a8] uppercase mb-4">
								{product.category.replace('-', ' ')}
							</span>

							<h1 className="font-['Manrope'] text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] mb-6">
								{product.title}
							</h1>

							<div className="flex items-center gap-4 mb-8">
								<div className="flex items-center gap-1 bg-[#f0f4f7] px-3 py-1.5 rounded-lg">
									<span className="text-lg text-[#f59e0b]">★</span>
									<span className="font-bold text-[#2a3439]">{product.rating}</span>
								</div>
								<span className="text-sm text-[#566166]">
									{product.stock > 0 ? `${product.stock} pieces remaining` : 'Out of Stock'}
								</span>
							</div>

							<div className="mb-10">
								<span className="text-3xl font-bold text-[#5654a8]">
									${product.price.toFixed(2)}
								</span>
								{product.discountPercentage > 0 && (
									<span className="ml-3 text-sm text-[#9a9d9f] line-through">
										${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
									</span>
								)}
							</div>

							<div className="prose prose-slate mb-10">
								<h3 className="text-lg font-semibold mb-2">About this Artifact</h3>
								<p className="text-[#566166] leading-relaxed">
									{product.description}
								</p>
								{product.brand && (
									<p className="text-[#566166] leading-relaxed mt-2">
										<span className="font-semibold text-[#2a3439]">Curator / Brand:</span> {product.brand}
									</p>
								)}
							</div>

							<div className="flex flex-col sm:flex-row gap-4 mt-auto">
								<button className="flex-1 bg-gradient-to-br from-[#5654a8] to-[#4a489b] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(86,84,168,0.2)]">
									Purchase Artifact
								</button>
								<button className="flex-1 bg-[#f0f4f7] text-[#2a3439] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-[#e8eff3]">
									Add to Collection
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
