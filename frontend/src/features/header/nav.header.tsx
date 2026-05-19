import { Link } from 'react-router';

export const Nav = () => {
	return (
		<header className="bg-trasparent fixed w-full top-0 left-0 z-10 p-4 text-black flex justify-between items-center">
			<nav className="">
				<ul className="font-heading flex gap-4">
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>
						<Link to={'/'}>Arrivals </Link>
					</li>
					<li>
						<Link to={'/'}>Men</Link>
					</li>
					<li>
						<Link to={'/'}>Women</Link>
					</li>
					<li>
						<Link to={'/'}>Kids</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
