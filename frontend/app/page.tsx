import Hero from '../components/home/Hero';
import Featured from '../components/home/Featured';

export default function HomePage() {
	return (
		<main style={{ padding: 24, display: 'grid', gap: 24 }}>
			<Hero />
			<Featured />
		</main>
	);
}
