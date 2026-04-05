'use client';

import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error('Failed to load products:', error);
	}, [error]);

	return (
		<main className="min-h-screen bg-[#f7f9fb] flex flex-col items-center justify-center p-4">
			<div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(42,52,57,0.04)] text-center max-w-md">
				<h2 className="text-2xl font-bold font-['Manrope'] text-[#9e3f4e] mb-4">
					Connection Interrupted
				</h2>
				<p className="text-[#566166] font-['Inter'] mb-8">
					We encountered an issue while retrieving the artifacts. Please check your connection and try again.
				</p>
				<button
					onClick={() => reset()}
					className="bg-gradient-to-br from-[#5654a8] to-[#4a489b] text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(86,84,168,0.2)]"
				>
					Retry Retrieval
				</button>
			</div>
		</main>
	);
}
