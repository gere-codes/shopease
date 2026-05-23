import { Link, useNavigate } from 'react-router';
interface Props {
	badge?: string;
	title: string;
	cta: string;
}

export const PromoBanner = ({ title, cta, badge }: Props) => {
	const navivate = useNavigate();
	return (
		<section className="h-[60vh] bg-black/90 text-white flex  font-heading">
			<section className="flex justify-between items-center w-full max-w-7xl mx-auto px-6">
				<section>
					<ul className="flex flex-col gap-4 ">
						<li>
							<Link to={'/women'}>Women</Link>
						</li>
						<li>
							<Link to={'/men'}>Men</Link>
						</li>
						<li>
							<Link to={'/Kids'}>Kids</Link>
						</li>
					</ul>
				</section>
				<section className="">
					<h2 className="text-white text-5xl md:text-7xl font-bold">{title}</h2>
					<p className="text-white mt-2 text-lg">{badge}</p>
				</section>
				<button className="border-white border px-3 py-2 cursor-pointer" onClick={() => navivate(cta)}>
					Shop Now
				</button>
			</section>
		</section>
	);
};
