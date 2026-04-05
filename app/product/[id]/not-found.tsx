import Link from 'next/link';

export default function NotFound() {
	return (
		<main className="min-h-screen bg-[#f7f9fb] flex flex-col items-center justify-center p-4">
			<div className="bg-white p-12 rounded-2xl shadow-[0_8px_30px_rgb(42,52,57,0.04)] text-center max-w-lg">
				<h2 className="text-4xl font-bold font-['Manrope'] text-[#111827] mb-4">
					Artifact Lost
				</h2>
				<p className="text-[#566166] font-['Inter'] mb-8 text-lg">
					The digital artifact you are looking for has been moved, removed, or never existed in the archive.
				</p>
				<Link
					href="/"
					className="inline-block bg-gradient-to-br from-[#5654a8] to-[#4a489b] text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(86,84,168,0.2)]"
				>
					Return to Archive
				</Link>
			</div>
		</main>
	);
}
