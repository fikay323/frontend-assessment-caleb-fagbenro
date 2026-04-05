export default function Loading() {
	return (
		<main className="min-h-screen bg-[#f7f9fb] px-4 sm:px-6 lg:px-8 py-12 w-screen">
			<header className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
				<div className="animate-pulse">
					<div className="h-10 w-64 bg-[#e1e9ee] rounded mb-4"></div>
					<div className="h-4 w-48 bg-[#e1e9ee] rounded"></div>
				</div>
				<div className="flex gap-4 animate-pulse">
					<div className="h-10 w-full sm:w-64 bg-[#e1e9ee] rounded-lg"></div>
					<div className="h-10 w-full sm:w-40 bg-[#e1e9ee] rounded-lg"></div>
				</div>
			</header>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
				{[...Array(8)].map((_, i) => (
					<div key={i} className="bg-white rounded-xl p-6 h-full flex flex-col animate-pulse shadow-[0_8px_30px_rgb(42,52,57,0.04)]">
						<div className="relative aspect-square mb-6 rounded-lg bg-[#e1e9ee]"></div>
						<div className="h-4 w-24 bg-[#e1e9ee] rounded mb-4"></div>
						<div className="h-5 w-full bg-[#e1e9ee] rounded mb-2"></div>
						<div className="h-5 w-2/3 bg-[#e1e9ee] rounded mb-6"></div>

						<div className="mt-auto flex items-center justify-between">
							<div className="h-6 w-16 bg-[#e1e9ee] rounded"></div>
							<div className="h-6 w-12 bg-[#e1e9ee] rounded"></div>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
