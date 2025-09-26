import '../styles/globals.css';
import { AppProviders } from '../components/providers';
import { Navbar } from '../components/navigation/Navbar';
import { Footer } from '../components/layout/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body>
				<AppProviders>
					<Navbar />
					{children}
					<Footer />
				</AppProviders>
			</body>
		</html>
	);
}
