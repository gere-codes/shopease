import type { ISlide } from '../types';

type alignment = 'items-start' | 'items-center' | 'items-end';

const mapAlign: Record<NonNullable<ISlide['textAlign']>, alignment> = {
	left: 'items-start',
	center: 'items-center',
	right: 'items-end',
};
export const SlideItem = ({ img, badge, title, cta, textAlign = 'left' }: ISlide) => {
	const textAlignment: string = mapAlign[textAlign];

	return (
		<>
			<section className="relative h-full">
				<img className="h-full w-full object-cover absolute inset-0 -z-10" src={img} alt="" />
				<div
					className={`flex flex-col gap-6 justify-center h-full p-6 font-heading mx-auto max-w-7xl ${textAlignment}`}
				>
					<small className="text-white bg-black w-fit px-3 py-1 text-xs font-semibold uppercase">
						{badge}
					</small>
					<h2 className="z-10 text-6xl capitalize">{title}</h2>
					<button
						type="button"
						aria-label={title}
						className="bg-black text-white font-semibold px-4 py-2 uppercase w-fit text-sm"
					>
						{cta}
					</button>
				</div>
			</section>
		</>
	);
};
