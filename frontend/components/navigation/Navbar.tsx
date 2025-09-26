import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
	return (
		<header style={{ borderBottom: '1px solid #e5e7eb' }}>
			<nav
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					padding: '12px 20px',
				}}
			>
				<Link href="/" style={{ fontWeight: 700 }}>Amusement Hub</Link>
				<div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
					<Link href="/explore">Explore</Link>
					<Link href="/user/profile">Profile</Link>
					<ThemeToggle />
				</div>
			</nav>
		</header>
	);
}
