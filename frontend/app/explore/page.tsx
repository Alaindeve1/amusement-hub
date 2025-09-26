import dynamic from 'next/dynamic';

const ExploreList = dynamic(() => import('../../components/explore/ExploreList'), { ssr: false });

export default function ExplorePage() {
	return (
		<main style={{ padding: 24 }}>
			<h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Explore</h1>
			<ExploreList />
		</main>
	);
}
