import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header>
			<div className='logo'>
				<Image
					src='/assets/images/eo-logo.svg'
					width={60}
					height={60}
					alt='Logo'
				/>
			</div>

			<nav>
				<Link href='/'>
					<a>Home</a>
				</Link>

				<Link href='/about'>
					<a>About</a>
				</Link>

				<Link href='/contact'>
					<a className='btn'>Contact</a>
				</Link>
			</nav>

			<button onClick={() => setMenuOpen(!menuOpen)}>
				<Image
					src='/assets/images/menu.svg'
					width={30}
					height={30}
					alt='Menu'
				/>
			</button>

			{menuOpen && (
				<div className='menu-open-overlay'>
					<nav>
						<Link href='/'>
							<a>Home</a>
						</Link>

						<Link href='/about'>
							<a>About</a>
						</Link>

						<Link href='/contact'>
							<a>Contact</a>
						</Link>
					</nav>
				</div>
			)}
		</header>
	);
};

export default Header;
