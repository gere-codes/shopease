import { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate, useSearchParams } from 'react-router';
import { FiShoppingCart, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { useAppSelector } from '@/shared/hooks/redux.hook';
import { selectCartTotalItems } from '../cart';

const navLinks = [
	{ to: '/men', label: 'Men', slug: 'men' },
	{ to: '/women', label: 'Women', slug: 'women' },
	{ to: '/kids', label: 'Kids', slug: 'kids' },
];
export const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
	const cartItemsCount = useAppSelector(selectCartTotalItems);

	useEffect(() => {
		const initials = () => {
			setSearchQuery(searchParams.get('search') || '');
		};

		initials();
	}, [searchParams]);

	const handleSearchSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!searchQuery.trim()) return;

		navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`);
		setIsMenuOpen(false);
	};

	const linkStyles = ({ isActive }: { isActive: boolean }) =>
		`transition-colors duration-200 block py-2 md:py-0 font-medium ${
			isActive ? 'text-black ' : 'text-gray-600 hover:text-black'
		}`;

	return (
		<header className="bg-white shadow-xs sticky top-0 z-50 h-18">
			<nav className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center" aria-label="Main Navigation">
				{/* Logo */}
				<Link className="font-bold text-2xl text-gray-600" to="/">
					ShopEase
				</Link>

				{/* Desktop: Nav Links */}
				<ul className="hidden md:flex gap-8">
					{navLinks.map((link) => (
						<li key={link.to}>
							<NavLink to={`catalog?category=${link.slug}`} className={linkStyles}>
								{link.label}
							</NavLink>
						</li>
					))}
				</ul>

				{/* Desktop: Search and Cart */}
				<div className="hidden md:flex items-center gap-6">
					<form onSubmit={handleSearchSubmit} className="relative">
						<input
							type="search"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder="Search..."
							className="bg-gray-100 rounded-full py-2 px-4 pl-10 w-48 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
						/>
						<button
							type="submit"
							className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
							aria-label="Submit Search"
						>
							<FiSearch />
						</button>
					</form>

					<Link
						to="/cart"
						className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 relative"
						aria-label="View Cart"
					>
						<FiShoppingCart size={22} />
						{cartItemsCount > 0 && (
							<span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full animate-pulse">
								{cartItemsCount}
							</span>
						)}
					</Link>
				</div>

				{/* Mobile: Menu Toggle */}
				<div className="md:hidden">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="text-gray-600 focus:outline-none flex items-center justify-center"
						aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={isMenuOpen}
					>
						{isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
					</button>
				</div>
			</nav>

			{/* Mobile: Menu */}
			{isMenuOpen && (
				<div className="md:hidden bg-white border-t border-gray-200 dynamic-mobile-menu">
					<ul className="flex flex-col gap-4 py-4 px-6">
						<li>
							<form onSubmit={handleSearchSubmit} className="relative w-full">
								<input
									type="search"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									placeholder="Search items..."
									className="w-full bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
								/>
								<button
									type="submit"
									className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
								>
									<FiSearch />
								</button>
							</form>
						</li>

						{navLinks.map((link) => (
							<li key={link.to}>
								<NavLink to={link.to} className={linkStyles} onClick={() => setIsMenuOpen(false)}>
									{link.label}
								</NavLink>
							</li>
						))}

						<li className="border-t border-gray-100 pt-2">
							<Link
								to="/cart"
								className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200 py-2"
								onClick={() => setIsMenuOpen(false)}
							>
								<div className="relative">
									<FiShoppingCart size={20} />
									{cartItemsCount > 0 && (
										<span className="absolute -top-1.5 -right-1.5 bg-indigo-600 text-white text-[10px] w-3.5 h-3.5 flex items-center justify-center rounded-full">
											{cartItemsCount}
										</span>
									)}
								</div>
								<span className="font-medium">Cart</span>
							</Link>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
};
