export default function ProductDetailLoading() {
	return (
		<main className="min-h-screen bg-[#f7f9fb] px-4 sm:px-6 lg:px-8 py-12 w-screen">
			{/* Breadcrumb Skeleton */}
			<nav className="mb-8">
				<div className="h-5 w-32 bg-[#e1e9ee] rounded animate-pulse"></div>
			</nav>

			{/* Main Content Skeleton */}
			<div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(42,52,57,0.04)] overflow-hidden">
				<div className="flex flex-col lg:flex-row">

					{/* Left Column: Image/Gallery Skeleton */}
					<div className="w-full lg:w-1/2 p-8 lg:p-12 bg-[#f0f4f7] flex items-center justify-center">
						<div className="w-full aspect-square max-w-xl mx-auto rounded-xl shadow-[0_20px_50px_rgba(86,84,168,0.08)] bg-[#e1e9ee] animate-pulse"></div>
					</div>

					{/* Right Column: Details Skeleton */}
					<div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
						<div className="animate-pulse">
							{/* Category Tag */}
							<div className="h-4 w-24 bg-[#e1e9ee] rounded mb-4"></div>

							{/* Title */}
							<div className="h-10 lg:h-12 w-3/4 bg-[#e1e9ee] rounded mb-6"></div>

							{/* Rating and Stock */}
							<div className="flex items-center gap-4 mb-8">
								<div className="h-8 w-16 bg-[#e1e9ee] rounded-lg"></div>
								<div className="h-4 w-32 bg-[#e1e9ee] rounded"></div>
							</div>

							{/* Pricing */}
							<div className="mb-10 flex items-center gap-3">
								<div className="h-8 w-24 bg-[#e1e9ee] rounded"></div>
								<div className="h-4 w-16 bg-[#e1e9ee] rounded"></div>
							</div>

							{/* Description block */}
							<div className="mb-10">
								<div className="h-6 w-48 bg-[#e1e9ee] rounded mb-6"></div>
								<div className="space-y-3">
									<div className="h-4 w-full bg-[#e1e9ee] rounded"></div>
									<div className="h-4 w-full bg-[#e1e9ee] rounded"></div>
									<div className="h-4 w-11/12 bg-[#e1e9ee] rounded"></div>
									<div className="h-4 w-4/5 bg-[#e1e9ee] rounded"></div>
								</div>

								{/* Brand info */}
								<div className="h-4 w-1/2 bg-[#e1e9ee] rounded mt-6"></div>
							</div>

							{/* Callabilities (Buttons) */}
							<div className="flex flex-col sm:flex-row gap-4 mt-auto">
								<div className="flex-1 h-14 bg-[#e1e9ee] rounded-xl"></div>
								<div className="flex-1 h-14 bg-[#e1e9ee] rounded-xl"></div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</main>
	);
}
